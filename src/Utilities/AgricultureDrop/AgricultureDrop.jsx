import { Link } from "react-router-dom";

const AgricultureDrop = () => {
    const business = [
        { id: 1, name: "Journal of Agriculture and Environmental Sciences", to: "/jaes", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Journal of Agriculture & Life Sciences", to: "/jals", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
    ]
    return (
        <div className="w-full bg-[#3d79fc]  border my-4 p-5">
            <div className='space-y-2'>
                {
                    business.map((subject) => <li className='list-none ' key={subject.id}>
                        <Link to={subject.to}>

                            <div className='flex items-center lg:justify-end gap-3'>
                                <p className='font-medium text-white hover:text-[#91000D] duration-300'>{subject.name}</p>
                                <div className='w-[5%]'>
                                    <img className='border-2 w-full p-1' src={subject.img} alt="" />
                                </div>
                            </div>
                        </Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default AgricultureDrop;