"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Book } from "../../types/book";
import { Button } from "@/components/ui/button";

export default function EditBook() {
  // State variables to store form data and feedback messages
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [message, setMessage] = useState("");
  // Hook for navigation
  const router = useRouter();

  // Function to handle form submission for editing a book
  const handleEditBook = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Create an updated book object with the form data
    const updatedBook: Book = { id: Number(id), title, author, isbn };

    try {
      // Send a PUT request to update the book with the specified ID
      const response = await axios.put(
        `http://localhost:3001/books/${id}`,
        updatedBook
      );

      if (response.status === 200) {
        // If the book is updated successfully, show a success message
        setMessage("Book updated successfully!");
        // Clear the form fields
        setId("");
        setTitle("");
        setAuthor("");
        setIsbn("");
        // Redirect to the main page after 1.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      // If there is an error, show a failure message
      setMessage("Failed to update the book. Please ensure the ID is correct.");
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        {/* Title of the page */}
        <h1 className="font-bold text-3xl text-center pt-3">Edit Book</h1>
      </div>
      <div className="items-center flex flex-col pt-3">
        {/* Form to edit a book */}
        <form onSubmit={handleEditBook}>
          <div className="flex flex-col justify-center">
            {/* Input field for the book ID */}
            <label className="font-semibold text-xl">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              placeholder="Enter id"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col py-3">
            {/* Input field for the book title */}
            <label className="font-semibold text-xl">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter title"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col py-3">
            {/* Input field for the book author */}
            <label className="font-semibold text-xl">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author"
              required
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="flex flex-col py-3">
            {/* Input field for the book ISBN */}
            <label className="font-semibold text-xl">ISBN</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              placeholder="Enter isbn"
              className="border-gray-600 border-2 rounded-md w-full"
            />
          </div>
          <div className="py-3 text-center">
            {/* Button to submit the form for editing the book */}
            <Button asChild className="cursor-pointer">
              <button type="submit">Edit book</button>
            </Button>
          </div>
        </form>
      </div>

      {/* Display the message to the user */}
      {message && <p className="font-semibold text-center">{message}</p>}
    </div>
  );
}
