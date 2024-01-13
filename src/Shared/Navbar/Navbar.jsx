import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { HiMiniXMark } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import './Navbar.css'
import logo from '../../assets/img/WEG_LOGO.jpg'
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
    const navLink = [
        { id: 1, name: "Home", to: "/" },
        { id: 2, name: "Journals", },
        { id: 3, name: "Research", to: "/research" },

        { id: 4, name: "About Us", to: "/about" },
        { id: 5, name: "Membership", to: "/membership" },
        { id: 6, name: "Contact", to: "/contact" },
    ]

    const [changeColor, setChangeColor] = useState()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])

    const [isOpen, setIsOpen] = useState(false)
    const [subOpen, setSubOpen] = useState(false)
    return (
        <div className="fixed top-0 w-full z-50">
            <div>
                {/* --for big device-- */}

                <div className={`xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6 bg-[#fff] ${changeColor ? "bg-[#ffffff] py-2 border-b border-[#ffffff] shadow-lg border" : ""}}`}>
                    <div className='flex items-center justify-between'>

                        <div className="w-1/6">
                            <Link to='/'>
                                <img className="lg:w-[40%] md:w-[50%] hover:scale-95 duration-300 cursor-pointer" src={logo} alt="" />
                            </Link>
                        </div>

                        <div className='lg:flex items-center xl:space-x-8 lg:space-x-6 hidden'>
                            <div className='flex items-center xl:space-x-8 lg:space-x-6 list-none text-[#393939] font-semibold'>
                                <li className="hover:text-[#950007] duration-300">
                                    <Link to="/"><a href="">Home</a></Link>
                                </li>
                                <li className="hover:text-[#950007] duration-300 relative journals">
                                    <Link to=""><a href="">Journals</a></Link>
                                    <div className="subJournals">
                                        <Dropdown></Dropdown>
                                    </div>
                                </li>
                                <li className="hover:text-[#950007] duration-300">
                                    <Link to='/research'>
                                        <a href="">Research</a>
                                    </Link></li>
                                <li className="hover:text-[#950007] duration-300">
                                    <Link to="/about"><a href="">About Us</a></Link>
                                </li>
                                <li className="hover:text-[#950007] duration-300">
                                    <Link to="/membership"><a href="">Membership</a></Link>
                                </li>
                                <li className="hover:text-[#950007] duration-300">
                                    <Link to="/contact"><a href="">Contact</a></Link>
                                </li>

                            </div>
                            <div className='flex items-center text-sm font-medium space-x-3 text-[#393939]'>

                                <Link to='/login'><button className='py-2 px-3 border border-[#04205A] hover:bg-[#950007]  hover:border-transparent hover:text-white duration-300 rounded'>Sign In / Sign Up</button></Link>

                                <Link to='/submit'>
                                    <button className='py-2 px-4 bg-[#950007] text-white tracking-wider
                                    hover:bg-[#853336] duration-300 rounded'>
                                        Submit
                                    </button>
                                </Link>
                            </div>
                        </div>



                        <div className='lg:hidden'>
                            <p onClick={() => setIsOpen(true)} className='text-xl py-2 px-2 bg-[#950007] hover:bg-[#853236] duration-300 rounded text-white'><MdMenu /></p>
                        </div>

                    </div>
                </div>



                {/* --for-smalle-device-- */}

                <div className={`lg:hidden fixed top-0 duration-300 z-50 left-0 w-[100%] h-screen bg-[#faf8f8] ${isOpen ? "left-0" : "left-[-100%]"}`}>
                    <div className='bg-[#950007]'>
                        <div className='flex items-center justify-between px-14 py-8'>
                            <h2 className='text-[#fff] font-bold leading-4'>WESTREN<br></br>EDUCATION GROUP</h2>
                            <p onClick={() => setIsOpen(false)} className='px-2 py-2 bg-[#fff] text-[#950007] rounded text-xl'><HiMiniXMark /></p>
                        </div>
                    </div>

                    <div>
                        <div className=' py-4'>
                            <div className=''>
                                {
                                    navLink.map((nav) => <li className='list-none font-medium hover:bg-[#91000c23] text-[#262626] py-4 border-b px-14' key={nav.id}>
                                        <Link to={nav.to}>
                                            <p>{nav.name}</p>
                                        </Link>
                                    </li>)
                                }
                            </div>
                            <div className='list-none font-medium bg-[#91000c23] text-[#262626]'>
                                <p className='border-b px-14 py-4'>Sign In</p>
                                <p className='border-b px-14 py-4'>Sing Up</p>
                                <p className='border-b px-14 py-4'>
                                    Submit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;