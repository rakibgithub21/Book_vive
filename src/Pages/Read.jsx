import { CiLocationOn } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Read = ({ read }) => {
    // console.log(read);
    const { image, yearOfPublishing, totalPages, tags, rating, bookName, author, publisher, category, bookId } = read;
    return (
        <div className="border my-5 gap-5 flex flex-col md:flex-row border-[#13131326] p-5 rounded-2xl">
            <div className="bg-[#1313130d] p-10 rounded-2xl">
                <img className="w-full" src={image} alt="" />
            </div>
            <div className="space-y-5">
                <h1 className="font-bold text-2xl">{bookName}</h1>
                <p className="text-[#131313cc] font-medium">By: {author}</p>
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="flex flex-wrap gap-4 items-center">
                        <p className="font-bold underline md:no-underline">Tag</p>
                        <h2 className="flex gap-2">{tags.map((tag, index) => <span
                            className="text-[#23BE0A] font-medium bg-[#23be0a0d] md:px-4 p-1 md:py-2 rounded-xl"
                            key={index}
                        >#{tag}</span>)}</h2>
                    </div>
                    <div className="flex gap-2 items-center ">
                        <CiLocationOn className="text-lg" />
                        <h3 className="font-medium text-[#131313cc]">Year of Publishing: {yearOfPublishing}</h3>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row  gap-5 text-[#13131399] font-medium">
                    <div className="flex items-center gap-2">
                        <IoPeopleOutline />
                        Publisher: {publisher}
                    </div>
                    <div className="flex items-center gap-2">
                        <SlNotebook />
                        <p>Page : {totalPages}</p>
                    </div>
                </div>
                <hr />
                <div className="flex flex-wrap font-medium items-center gap-3 md:gap-10">
                    <h3 className="bg-[#328eff26] px-5 py-2 rounded-full text-[#328EFF]">Category: {category}</h3>
                    <h3 className="px-5 text-[#FFAC33] py-2 rounded-full bg-[#ffac3326]">Rating: {rating}</h3>
                    
                    <Link to={`/bookdetails/${bookId}`}><button className="px-5 text-white py-2 rounded-full bg-[#23BE0A]">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};
Read.propTypes = {
    read: PropTypes.object
};

export default Read;