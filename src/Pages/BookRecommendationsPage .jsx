

const BookRecommendationsPage = () => {
    const bookRecommendations = [
        {
            title: "Science Fiction Classics",
            description: "Explore timeless works of science fiction that have shaped the genre.",
            books: [
                { title: "Dune", author: "Frank Herbert", backgroundColor: "#FECACA", rating: 4.5, publishedYear: 1965 },
                { title: "Foundation", author: "Isaac Tan", backgroundColor: "#FCD34D", rating: 4.8, publishedYear: 1951 },
                { title: "Neuromancer", author: "William Gimbson", backgroundColor: "#A5B4FC", rating: 4.3, publishedYear: 1984 }
            ]
        },
        {
            title: "Mystery Thrillers",
            description: "Get lost in gripping mysteries and thrilling suspense.",
            books: [
                { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", backgroundColor: "#C4FCEA", rating: 4.6, publishedYear: 2005 },
                { title: "Gone Girl", author: "Gillian Jhon", backgroundColor: "#FBCFE8", rating: 4.2, publishedYear: 2012 },
                { title: "The Da Vinci Code", author: "Dan Bread", backgroundColor: "#FED7AA", rating: 4.1, publishedYear: 2003 }
            ]
        },
    ];

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Book Recommendations</h2>
                {bookRecommendations.map((recommendation, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">{recommendation.title}</h3>
                        <p className="text-lg text-gray-700 mb-4">{recommendation.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {recommendation.books.map((book, idx) => (
                                <div key={idx} className="bg-white p-4 rounded-lg shadow-md" style={{ backgroundColor: book.backgroundColor }}>
                                    <h4 className="text-xl font-semibold mb-2">{book.title}</h4>
                                    <p className="text-gray-600">{book.author}</p>
                                    <p className="text-gray-600">Rating: {book.rating}</p>
                                    <p className="text-gray-600">Published Year: {book.publishedYear}</p>
                                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookRecommendationsPage;

