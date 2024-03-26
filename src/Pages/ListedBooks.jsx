

const ListedBooks = () => {
    return (
        <div className="mt-9">
            <div className="text-center bg-[#1313130d] py-8">
                <h3 className="text-3xl font-semibold">Books</h3>
            </div>
            <div className="text-center my-10">

                <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 font-semibold bg-[#23BE0A]  text-white">
                    <option value="default" hidden disabled selected>Sort By</option>
                    <option value="publishedYear">Published Year</option>
                    <option value="ratings">Ratings</option>
                    <option value="pageNumber">Page Number</option>
                </select>
            </div>
        </div>
    );
};

export default ListedBooks;