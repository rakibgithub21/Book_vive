import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    const book = books.find(book => book.bookId == id);
    const { image, bookName, review, author, category, tags } = book;

    const addToReadLS = () => {
        const saveData = JSON.parse(localStorage.getItem('readList')) || [];
        const isExists = saveData.find(data => data.bookId == id);
        if (isExists) {
            toast.error('You already read this')
        } else {
            saveData.push(book);
            localStorage.setItem('readList', JSON.stringify(saveData));
            toast.success('You read succesfully')
        }
    }

    const addtoWishLs = () => {

        const readList = JSON.parse(localStorage.getItem('readList')) || [];
        // console.log(readList);
        const wishlist = JSON.parse(localStorage.getItem('wishList')) || [];
        // console.log(wishlist);

        const exist = readList.find(read => read.bookId == id);
        if (exist) {
            toast.error('You already read this');
        }
        else {
            wishlist.push(book);
            localStorage.setItem('wishList', JSON.stringify(wishlist));
            toast.success('You added succesfully');
        }


    }


    return (
        <div className="lg:grid grid-cols-2 gap-10">
            <div className="lg:col-span-1 bg-[#1313130d] flex justify-center">
                <img className="w-[425px] object-cover p-5" src={image} alt="" />
            </div>
            <div className="lg:col-span-1 space-y-7">
                <h1 className="text-4xl font-bold">{bookName}</h1>
                <h3 className="text-xl font-medium text-[#131313cc]">By: {author}</h3>
                <hr />
                <h3 className="text-xl font-medium text-[#131313cc]">{category}</h3>
                <hr />
                <p className="text-[#131313b3]"><span className="font-bold">Review : </span>{review}</p>
                <div className="flex gap-5 items-center">
                    <p className="font-bold">Tags </p>
                    <p className="flex gap-5">{tags.map((tag, index) => <span
                        className="py-2 px-4 bg-[#23be0a0d] rounded-3xl text-[#23BE0A] font-medium"
                        key={index}

                    >#{tag}</span>)}</p>
                </div>
                <hr />
                <div className="flex
                gap-10">
                    <div className="text-[#131313b3]">
                        <p>Number of Pages</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="text-[#131313] font-semibold">
                        <p>281</p>
                        <p>J.B Lippincott & Co.</p>
                        <p>1960</p>
                        <p>4.8</p>
                    </div>
                </div>

                <div className="flex gap-10">
                    <button onClick={addToReadLS} className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                            <span className="relative">Read</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </button>

                    <button onClick={addtoWishLs} className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">Wishlist</span>
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;