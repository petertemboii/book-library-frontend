"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; // Assuming buttonVariants is not used
import Link from "next/link";

// Define an interface for the book object
interface Book {
  id: number;
  title: string;
  author: string;
  isbn: string;
}

const ContentArea = () => {
  const [books, setBooks] = useState<Book[]>([]); // Initialize state with an empty array

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3001/books/");
        console.log(response.data);
        setBooks(response.data); // Update state with the fetched books
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="items-center justify-between">
        {/* Render buttons only if books array has items */}
        {books.length > 0 && (
          <div className="flex pt-3">
            <div>
              <Button asChild className="cursor-pointer">
                <Link href="/add-book">Add book</Link>
              </Button>
            </div>
            <div className="px-4">
              <Button asChild className="cursor-pointer">
                <Link href="/edit-book">Edit book</Link>
              </Button>
            </div>
            <div>
              <Button asChild className="cursor-pointer">
                <Link href="/delete-book">Delete book</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        {/* Render books if books array has items */}
        {books.length > 0 ? (
          <div>
            {books.map((book, index) => (
              <div
                key={book.id}
                className="flex flex-col items-start flex-1  w-fit rounded-[20px] shadow-2xl px-10 py-7"
              >
                <div className="text-2xl font-semibold pb-4 text-center">
                  <span className="text-cyan-600">Book</span> {index + 1}
                </div>
                <div>
                  <span className="font-semibold">Title:</span> {book.title}
                </div>
                <div>
                  <span className="font-semibold">Author:</span> {book.author}
                </div>
                <div>
                  <span className="font-semibold">ISBN:</span> {book.isbn}
                </div>
                <div>
                  <span className="font-semibold">ID:</span> {book.id}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Show message when books array is empty */}
            <div className="text-2xl font-semibold flex flex-col justify-center items-center flex-1  w-fit rounded-[20px] shadow-2xl px-10 py-7">
              The Library is Empty!
            </div>
            <Button asChild className="cursor-pointer">
              <Link href="/add-book">Add book</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentArea;
