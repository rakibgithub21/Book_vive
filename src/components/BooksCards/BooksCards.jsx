import { useEffect, useState } from "react";


const BooksCards = () => {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetch('allbooks.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books);
    return (
        <div className="mt-14">
            <h3 className="text-center font-bold text-4xl">Books</h3>
        </div>
    );
};

export default BooksCards;