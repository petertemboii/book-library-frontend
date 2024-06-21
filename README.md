# Book Library Frontend

This is a simple frontend application built with React for managing a book library.

## Technology Choices

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Axios: A promise-based HTTP client for making API requests.
- TypeScript: A statically typed superset of JavaScript that enhances code quality and maintainability.

## Features

- CRUD Operations: Interface for creating, reading, updating, and deleting books.
- UI Components: Custom UI components using Tailwind CSS.
- API Integration: Communicates with the Book Library API for data management.

## Additional Features

- User Feedback: Added messages to inform users about the success or failure of their actions (e.g., adding, updating, or deleting a book).

- Responsive Design: Ensured the application is responsive and works well on different screen sizes.

## Prerequisites

Node.js (v16 or above)
npm (v6 or above) or Yarn (v1.22 or above)

## Installation

### Clone the repository:

git clone [<book-library-frontend>](https://github.com/petertemboii/book-library-frontend.git)
cd book-library-frontend

### Install dependencies:

npm install
or
yarn install

## Running the Application

npm run dev
or
yarn dev

## Pages and Routes

### Home

GET /

### Add Book

/add-book
Form for adding a new book to the library.

### Edit Book

/edit-book
Form for editing an existing book in the library. Requires the book ID.

### Delete Book

/delete-book
Form for deleting a book from the library. Requires the book ID

## Styling

The application uses Tailwind CSS for styling. You can find the configuration in tailwind.config.js.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
