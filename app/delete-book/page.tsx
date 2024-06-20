"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function DeleteBook() {
  // State to store the ID of the book to be deleted
  const [id, setId] = useState("");
  // State to store the message to be displayed to the user
  const [message, setMessage] = useState("");
  // Hook for navigation
  const router = useRouter();

  // Handle form submission to delete a book
  const handleDeleteBook = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      // Send a DELETE request to delete the book with the specified ID
      const response = await axios.delete(`http://localhost:3001/books/${id}`);

      if (response.status === 200) {
        // If the book is deleted successfully, show a success message
        setMessage("Book deleted successfully!");
        // Clear the ID input field
        setId("");
        // Redirect to the main page after 1.5 seconds
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (error) {
      // If there is an error, show a failure message
      setMessage("Failed to delete the book. Please ensure the ID is correct.");
    }
  };

  return (
    <div className="flex flex-col">
      <div>
        {/* Title of the page */}
        <h1 className="font-bold text-3xl text-center pt-3">Delete Book</h1>
      </div>
      <div className="items-center flex flex-col py-3">
        {/* Form to delete a book */}
        <form onSubmit={handleDeleteBook}>
          <div className="flex flex-col justify-center py-1">
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
          <div className="py-3 text-center">
            {/* Submit button to delete the book */}
            <Button asChild className="cursor-pointer" variant="destructive">
              <button type="submit">Delete book</button>
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
