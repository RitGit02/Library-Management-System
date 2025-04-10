import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import Card from "./components/ui/Card";
import CardContent from "./components/ui/CardContent";

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [editId, setEditId] = useState(null); // 👈 track book being edited

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:5000/books");
    setBooks(response.data);
  };

  const addBook = async () => {
    await axios.post("http://localhost:5000/books", {
      title,
      author,
      published_date: publishedDate,
    });
    fetchBooks();
    resetForm();
  };

  const updateBook = async () => {
    await axios.put(`http://localhost:5000/books/${editId}`, {
      title,
      author,
      published_date: publishedDate,
    });
    fetchBooks();
    resetForm();
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    fetchBooks();
  };

  const startEdit = (book) => {
    setEditId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setPublishedDate(book.published_date);
  };

  const resetForm = () => {
    setEditId(null);
    setTitle("");
    setAuthor("");
    setPublishedDate("");
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">
        <center>Library Management System</center>
      </h1>

      <div className="mb-4">
        <center>
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
          <Input type="date" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
        </center>
        <center className="mt-2 space-x-2">
          <Button onClick={editId ? updateBook : addBook}>
            {editId ? "Update Book" : "Add Book"}
          </Button>
          {editId && (
            <Button
              onClick={resetForm}
              className="ml-2 bg-gray-400 hover:bg-gray-500 text-white"
            >
              Cancel
            </Button>
          )}
        </center>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <Card key={book.id} className="p-3">
            <CardContent>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p>by {book.author}</p>
              <p className="text-sm text-gray-500">Published: {book.published_date}</p>
              <div className="flex gap-2 mt-2">
                <Button onClick={() => startEdit(book)}>Edit</Button>
                <Button onClick={() => deleteBook(book.id)}>Delete</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
