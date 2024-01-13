import PageTitle from "../../Utilities/PageTitle/PageTitle";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiShare2 } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdEyeOff } from "react-icons/io";
import logo from '../../assets/img/WEG_LOGO.jpg'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-6">
                <div className="w-1/6">
                    <Link to='/'>
                        <img className="lg:w-[45%] md:w-[50%] cursor-pointer hover:scale-95 duration-300" src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="xl:px-40 lg:px-16 md:px-14 sm:px-12 px-12 py-4">
                <PageTitle title={"SignUp"}></PageTitle>

                <div className="border rounded-md grid lg:grid-cols-2">

                    <div className="lg:px-12 px-8 py-8">
                        <h2 className="text-2xl font-bold text-[#072159]">Access exclusive features with a free account</h2>
                        <div className="py-4  text-[#262626bb] space-y-2">
                            <p className="flex  lg:items-center items-baseline space-x-2"><span className="text-xl"><GoFileSymlinkFile /></span><span>Save and sort your favorite assets with Collections</span></p>
                            <p className="flex lg:items-center items-baseline space-x-2"><span className="text-xl"><CiShare2 /></span><span>Share Collections with anyone, anywhere</span></p>
                            <p className="flex lg:items-center items-baseline space-x-2"><span className="text-xl"><HiOutlineDownload /></span><span>Try before you purchase with downloadable comps</span></p>
                            <p className="flex items-baseline space-x-2"><span className="text-xl"><IoMdEyeOff /></span><span>Easily keep track of your download and browsing history</span></p>
                            <p className="flex items-baseline space-x-2 py-2"><span>Plus much more.</span></p>
                        </div>
                    </div>

                    <div className="border lg:px-12 px-8 py-8">
                        <h2 className="text-2xl font-bold text-[#072159]">Create your free account</h2>

                        <div className="py-4">
                            <form className="space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Your Full Name<sup className="text-[#91000D]">*</sup></label>
                                    <input 
                                    {...register("name", { required: true })}
                                    className="px-2 py-2 border outline-none rounded" type="text" placeholder="Your Name..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Email<sup className="text-[#91000D]">*</sup></label>
                                    <input 
                                    {...register("email", { required: true })}
                                    className="px-2 py-2 border outline-none rounded" type="email" placeholder="Enter Email..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Password<sup className="text-[#91000D]">*</sup></label>
                                    <input
                                    {...register("password", { required: true })}
                                    className="px-2 py-2 border outline-none rounded" type="password" placeholder="Password..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Name Of Your Institute<sup className="text-[#91000D]">*</sup></label>
                                    <input
                                    {...register("institute")}
                                    className="px-2 py-2 border outline-none rounded" type="text" placeholder="Institute..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Name Of Your Department<sup className="text-[#91000D]">*</sup></label>
                                    <input
                                    {...register("department")}
                                    className="px-2 py-2 border outline-none rounded" type="text" placeholder="Department..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Name Of Your Position<sup className="text-[#91000D]">*</sup></label>
                                    <input
                                    {...register("position")}
                                     className="px-2 py-2 border outline-none rounded" type="text" placeholder="Position..." />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold">Contact Number<sup className="text-[#91000D]">*</sup></label>
                                    <input className="px-2 py-2 border outline-none rounded" type="text" placeholder="Position..." />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <input className="px-2 py-2 border outline-none bg-[#8D0012] hover:bg-[#0A2258] duration-300 cursor-pointer text-white rounded" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <div className="py-4 font-medium text-[#262626b0]">
                                <p>Already have an account? <span className="text-[#8D0012]  hover:text-[#0A2258] cursor-pointer"><Link to='/login'>Log in</Link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SignUp;