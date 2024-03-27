import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#23BE0A] underline rounded' : 'text-lg '} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#23BE0A] underline rounded' : 'text-lg '} to='/listedbooks'>Listed Books</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#23BE0A] underline rounded' : 'text-lg '} to='/pagestoread'>Page to Read</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#23BE0A] underline rounded' : 'text-lg '} to='/upcoming'>Upcoming</NavLink>
                        <NavLink className={({ isActive }) => isActive ? ' text-lg font-medium text-[#23BE0A] underline rounded' : 'text-lg '} to='/review'>Review</NavLink>
                    </div>
                </div>
                <Link to='/' className="btn btn-ghost text-xl md:text-3xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-1 gap-3">
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#23BE0A] border-[#23BE0A] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:btn-outline'} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#23BE0A] border-[#23BE0A] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:btn-outline'} to='/listedbooks'>Listed Books</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#23BE0A] border-[#23BE0A] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:btn-outline'} to='/pagestoread'>Page to Read</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#23BE0A] border-[#23BE0A] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:btn-outline'} to='/upcoming'>Upcoming</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'border-2 font-semibold text-lg text-[#23BE0A] border-[#23BE0A] py-3 rounded-xl px-6' : 'py-3 px-6 text-lg rounded-xl hover:btn-outline'} to='/review'>Review</NavLink>
                </div>
            </div>
            <div className="navbar-end gap-2 ">
                <a className="btn text-white  bg-[#23BE0A]">Sign In</a>
                <a className="btn text-white  bg-[#59C6D2]">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;