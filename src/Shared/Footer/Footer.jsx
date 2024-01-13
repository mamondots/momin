import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12 bg-[#04205A]">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12">

                    <div className="text-[#fff] space-y-2">
                        <div className="py-4">
                            <h2 className="font-medium tracking-wider  py-4">WESTREN EDUCATION GROUP</h2>
                            <p className="text-sm">22 No House,02 No Road, Mirpur-1</p>
                            <p className="text-sm">Dhaka, Bangladesh</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">PHONE</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">+880164628**</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">INTERNATIONAL</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">+88016462866**</p>
                        </div>

                        <div>
                            <p className="font-medium tracking-wider text-sm py-1">EMAIL</p>
                            <p className="text-sm text-[#ffffffb1] hover:text-[#91000D] cursor-pointer duration-300">weg12@gmail.com</p>
                        </div>
                    </div>

                    <div className="py-4 text-[#fff]">
                        <h2 className="font-medium tracking-wider  py-4">Information Policies</h2>

                        <div className="text-sm space-y-2 text-[#ffffffb1] cursor-pointer">
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/policies'>E-Publication First<sup>TM</sup></Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/policies'>Plagiarism Policy</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/policies'>Copyright Policy</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/policies'>Review Policy</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/resources'>Research Guidelines</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/Ijatnet/latest_activities'>Publication Plan</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/membership'>Membership</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/contact'>Contact</Link></p>
                        </div>
                    </div>

                    <div className="py-4 text-[#fff]">
                        <h2 className="font-medium tracking-wider  py-4">Information For</h2>

                        <div className="text-sm space-y-2 text-[#ffffffb1] cursor-pointer">
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/submission'>Submission</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/resources'>Resources</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/policies'>Journal Policies</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/usefull_link'>Useful Links</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/latest_activities'>Latest Activities</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/subcription'>Subscription</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/information'>Information</Link></p>
                            <p className="hover:text-[#91000D] cursor-pointer duration-300"><Link to='/information/index'>Index</Link></p>
                            <p className="text-[#91000D] cursor-pointer duration-300"><Link to='/subjects'>Browse More</Link></p>
                        </div>
                    </div>

                    <div className="text-[#fff]">
                        <h2 className="font-medium tracking-wider  py-4">CONNECT</h2>

                        <div className="flex space-x-2 cursor-pointer">
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaFacebookF /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaTwitter /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaLinkedinIn /></p>
                            <p className="px-2 py-2 border hover:bg-[#91000D] duration-300 hover:border-transparent hover:rounded"><FaInstagram /></p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#950007] py-4 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12">
                <div className="flex lg:items-center flex-wrap lg:gap-12 gap-4 text-center">
                    <div className="flex items-center text-[#fff] text-sm space-x-1">
                        <p><AiOutlineCopyrightCircle /></p>
                        <p>2023 Westren Education Group. All Rights Reserved.</p>
                    </div>

                    <div className="flex items-center flex-wrap  space-x-8 text-sm text-[#ffffff86] cursor-pointer font-medium">

                        <Link to="/accessibility">
                            <p className="hover:text-[#072159] duration-300">Accessibility </p>
                        </Link>

                        <Link to="/privecy_policy">
                            <p className="hover:text-[#072159] duration-300">Legal</p>
                        </Link>
                        <Link to="/privecy_policy">
                            <p className="hover:text-[#072159] duration-300">Privacy</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;