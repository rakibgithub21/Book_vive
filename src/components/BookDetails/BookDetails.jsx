import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const book = useLoaderData();
    console.log(book);
    const { id } = useParams();
    console.log(id);
    const matched = book.find(b => b.bookId == id);
    return (
        <div>
            <h1>Book details are here</h1>
            <p>{matched.bookName}</p>
        </div>
    );
};

export default BookDetails;