
import { Link } from 'react-router-dom';
import oopsImage from '../assets/Img/oops.jpg'
const EmptyBar = () => {
    return (

        <div className='flex flex-col justify-center items-center h-[80vh] text-center space-y-5 font-bold'>
            
            <img src={oopsImage} alt="" />
            <p className='text-5xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%'> To see the chart you need to read at least one book.</p>

            <Link to='/' className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Read Books...</span>
                </span>
            </Link>
        </div>




    );
};

export default EmptyBar;