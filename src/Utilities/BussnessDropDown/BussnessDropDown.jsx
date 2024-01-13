import { Link } from "react-router-dom";

const BussnessDropDown = () => {
    const business = [
        { id: 1, name: "Journal of Business Law and Ethics", to: "/jble", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Business Research Review ", to: "/brr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "International Journal of Business, Humanities and Technology", to: "/ijbht", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "International Journal of Business and Social Science", to: "/ijbss", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 5, name: "Journal of Business & Economic Policy", to: "/jbep", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
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

export default BussnessDropDown;