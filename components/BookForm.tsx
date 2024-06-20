"use client";

import React, { useState, useEffect, FC } from "react";
import { Book } from "../types/book";

// Props interface for BookForm component
interface BookFormProps {
  currentBook?: Book; // Optional currentBook object for editing
  onSubmit: (book: Book) => void; // Callback function when form is submitted
}

// Functional component for BookForm
const BookForm: FC<BookFormProps> = ({ currentBook, onSubmit }) => {
  // State variables to store form data
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  // Effect to update form fields when currentBook changes
  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title); // Set title from currentBook
      setAuthor(currentBook.author); // Set author from currentBook
      setIsbn(currentBook.isbn || ""); // Set isbn from currentBook, default to empty string if null
    }
  }, [currentBook]); // Trigger effect when currentBook changes

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    // Create a book object with form data
    const book: Book = {
      id: currentBook?.id || Date.now(), // Use currentBook's id or generate a new one
      title,
      author,
      isbn,
    };

    onSubmit(book); // Call onSubmit callback with the book object
  };

  // JSX structure for the form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>ISBN:</label>
        <input
          type="text"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
