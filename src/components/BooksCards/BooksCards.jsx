import { useEffect, useState } from "react";
import Book from "../Book/Book";


const BooksCards = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('allbooks.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    // console.log(books);
    return (
        <div className="my-14 p-3 md:p-0">
            <h3 className="text-center font-bold text-4xl mb-10">Books</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5">
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