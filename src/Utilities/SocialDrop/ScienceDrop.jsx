import { Link } from "react-router-dom";

const ScienceDrop = () => {
    const business = [
        { id: 1, name: "Science and Technology Review", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "International Journal of Applied Science and Technology", to: "/ijast", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
    ]
    return (
        <div className="w-full  bg-[#3d79fc]  border my-4 p-5">
            <div className='space-y-2'>
                {
                    business.map((subject) => <li className='list-none ' key={subject.id}>
                        <Link to={subject.to}>

                            <div className='flex items-center gap-3'>
                                <div className='w-[5%]'>
                                    <img className='border-2 w-full p-1' src={subject.img} alt="" />
                                </div>
                                <p className='font-medium text-white hover:text-[#91000D] duration-300'>{subject.name}</p>
                            </div>
                        </Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default ScienceDrop;