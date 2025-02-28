
import { useNavigate } from 'react-router-dom';
import bookImages from '../../assets/Book/pngwing 1.png'
const Banner = () => {
    const navigate = useNavigate();
    const viewTheListButton = () => {
        navigate('/listedbooks')
    }
    return (
        <div className='flex flex-col gap-5 md:gap-0 md:text-start md:flex-row items-center text-center justify-between md:p-40 p-5 bg-[#1313130d] rounded-lg'>
            <div className='md:w-[526px] pace-y-4 '>
                <h3 className='md:text-[56px] mb-10 font-semibold text-4xl leading-snug md:font-bold'>Books to freshen up your bookshelf</h3>
                <button onClick={viewTheListButton} className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative">View The List</span>
                </button>
            </div>
            <div>
                <img className='w-[320px] ' src={bookImages} alt="" />
            </div>
        </div>
    );
};

export default Banner;