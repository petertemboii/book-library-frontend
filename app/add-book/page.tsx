"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Book } from "../../types/book";
import { Button } from "@/components/ui/button";

export default function AddBook() {
  // State to store the form data
  const [book, setBook] = useState({ title: "", author: "", isbn: "" });
  // State to store the message to be displayed to the user
  const [message, setMessage] = useState("");
  // Hook for navigation
  const router = useRouter();

  // Handle input change and update the corresponding field in the book object
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update the specific field in the book object
    setBook({ ...book, [name]: value });
  };

  // Handle form submission
  const handleAddBook = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Send a POST request to add the new book
      const response = await axios.post("http://localhost:3001/books", book);

      if (response.status === 201) {
        // If the book is added successfully, show a success message
        setMessage("Book added successfully!");
        // Clear the form fields
        setBook({ title: "", author: "", isbn: "" });
        // Redirect to the main page after 1.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      // If there is an error, show a failure message
      setMessage("Failed to add the book.");
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="font-bold text-3xl text-center pt-3">Add Book</h1>
      </div>
      <div className="items-center flex flex-col py-3">
        <form onSubmit={handleAddBook}>
          <div className="flex flex-col justify-center">
            <label className="font-semibold text-xl">Title</label>
            {/* Input field for the book title */}
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleInputChange}
              required
              placeholder="Enter title"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="font-semibold text-xl">Author</label>
            {/* Input field for the book author */}
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleInputChange}
              required
              placeholder="Enter author"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col py-3">
            <label className="font-semibold text-xl">ISBN</label>
            {/* Input field for the book ISBN  */}
            <input
              type="text"
              name="isbn"
              value={book.isbn}
              onChange={handleInputChange}
              placeholder="Enter isbn"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="py-3 text-center">
            <Button asChild className="cursor-pointer ">
              <button type="submit">Add Book</button>
            </Button>
          </div>
        </form>
      </div>
      <div>
        {/* Display the message to the user */}
        {message && <p className="font-semibold text-center">{message}</p>}
      </div>
    </div>
  );
}
