import PageTitle from "../Utilities/PageTitle/PageTitle";
import { FaPhone } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";

const ContactPage = () => {

    return (
        <div className="mt-28">
            <PageTitle title={'contact'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Contact us</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>


            <RoutingTop>
                <div className='my-8 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6'>
                    <div className='grid lg:grid-cols-2 gap-6'>

                        <div className='bg-[#F9F9F9] px-6 py-8'>
                            <div className=''>
                                <h2 className='text-lg font-bold'>Send Us a Message</h2>
                                <p className='py-2 text-[#91000D]'>Your email address will not be published. All the fields are required.</p>
                            </div>

                            <div className='py-4'>
                                <form className='space-y-3'>
                                    <div className='w-full'>
                                        <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Name' />
                                    </div>

                                    <div>
                                        <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Email' />
                                    </div>

                                    <div className='flex gap-2'>

                                        <div className='w-full'>
                                            <select className='w-full py-2 px-4 outline-none border-2 text-[#505050]'>
                                                <option value="">WEG Member</option>
                                                <option value="">Yes</option>
                                                <option value="">No</option>
                                            </select>
                                        </div>

                                        <div className='w-full'>
                                            <input className='w-full py-2 px-4 outline-none border-2' type="text" placeholder='Your Country' />
                                        </div>
                                    </div>

                                    <div>
                                        <textarea className='w-full py-2 px-4 outline-none border-2 text-[#505050]' name="" id="" cols="30" rows="6">
                                            Your Message
                                        </textarea>
                                    </div>

                                    <div className=''>
                                        <input className='cursor-pointer text-sm px-10 py-3 bg-[#91000D] rounded hover:bg-[#072159] duration-300 font-medium text-white' type="submit" value="SUBMIT" />
                                    </div>

                                </form>
                            </div>
                        </div>

                        <div className='bg-[#F9F9F9] px-6 py-8'>
                            <h2 className='text-xl font-semibold'>Contact Information</h2>
                            <div className='py-4 font-medium text-[#4b4b4b]'>
                                <p>Mirpur-1, Road No-22, House No-08</p>
                                <p>Dhaka, Bangladesh</p>
                            </div>

                            <div>
                                <h2 className='font-semibold text-xl'>We're Available 24/ 7. Call Now.</h2>
                                <div className='py-3 space-y-2 font-medium text-[#4b4b4b]'>
                                    <p className='flex items-center space-x-2'><span className='text-sm'><FaPhone /></span><span>(888) 456-2790</span></p>
                                    <p className='flex items-center space-x-2'><span className=''><GiRotaryPhone /></span><span>(121) 255-53333</span></p>
                                </div>
                            </div>

                            <div className='flex items-center gap-6 py-4'>
                                <h2 className='font-semibold text-lg'>Follow Us</h2>
                                <div className='flex items-center space-x-2'>
                                    <a className='px-2 py-2  bg-[#4B68A8] text-white rounded-full hover:bg-[#3674fa] hover:scale-105 duration-300' href='https://www.facebook.com/' target="_blank"><FaFacebookF /></a>
                                    <a className='px-2 py-2  bg-[#D43B78] text-white rounded-full hover:bg-[#ff3787] hover:scale-105 duration-300' href='https://www.instagram.com/' target="_blank"><FaInstagram /></a>
                                    <a className='px-2 py-2  bg-[#3098E7] text-white rounded-full hover:bg-[#2ca3ff] hover:scale-105 duration-300' href='https://twitter.com/' target="_blank"><FaTwitter /></a>
                                    <a className='px-2 py-2  bg-[#2E66AA] text-white rounded-full hover:bg-[#2f8dff] hover:scale-105 duration-300' href='https://bd.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default ContactPage;