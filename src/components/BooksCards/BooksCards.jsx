import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BooksCards = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('allbooks.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className="mt-14">
            <h3 className="text-center font-bold text-4xl">Books</h3>
            <div>
                {
                    books.map(book => <Book
                        key={book.bookId}
                        book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default BooksCards;