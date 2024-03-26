import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
    console.log(book);
    const { bookName, author, image, tags, category, rating } = book;
    return (
        <div className='border rounded-3xl border-[#13131326]'>
            <div className='flex justify-center rounded-2xl bg-gray-100 m-8'>
                <img className='p-5 w-[130px] h-[170px]' src={image} alt="" />
            </div>

            <div className='m-8 space-y-4'>

                <h2 className='flex gap-2'>
                    {tags.map((tag, index) => <span className='px-4 py-2 bg-[#23be0a0d] rounded-3xl text-[#23BE0A] font-medium'
                        key={index}
                    >{tag}</span>)}
                </h2>
                <h1 className='font-bold text-2xl'>{bookName}</h1>
                <h3 className='font-medium text-[#131313cc]'>By: {author}</h3>
                <hr className='border border-dashed' />

                <div className='flex justify-between '>
                    <span className='font-medium'>{category}</span>
                    <h2 className='flex gap-2 items-center'>
                        <span className='font-medium'>{rating}</span>
                        <span><CiStar className='text-[20px]' /></span>
                    </h2>
                </div>

            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;