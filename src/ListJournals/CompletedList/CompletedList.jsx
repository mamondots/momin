import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import PageTitle from '../../Utilities/PageTitle/PageTitle';
import RoutingTop from '../../Utilities/PageTitle/RoutingTop/RoutingTop';
const CompletedList = () => {
    const leftSubjects = [
        { id: 1, name: "International Journal of Business and Social Science", to: "/ijbss", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "International Journal of Humanities and Social Science", to: "/ijhss", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "American International Journal of Social Science", to: "/aijss", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "Journal of Anthropology and Archaeology", to: "/jaa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 5, name: "Journal of Geography and Earth Sciences", to: "/jges", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 6, name: "Review of History and Political Science", to: "/rhps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Journal of Power, Politics & Governance", to: "/jppg", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 8, name: "Journal of Psychology and Behavioral Science", to: "/jpbs", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 9, name: "Review of Journalism and Mass Communication", to: "/rjmc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 10, name: "International Journal of Language and Linguistics", to: "/ijllnet", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 11, name: "International Journal of Linguistics and Communication", to: "/ijlc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 12, name: "Journal of Foreign Languages, Cultures & Civilizations", to: "/jflcc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 13, name: "International Journal of Philosophy and Theology", to: "/ijpt", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 14, name: "Journal of Islamic Studies and Culture", to: "/jisc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 15, name: "Journal of Education and Human Development", to: "/jehd", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 30, name: "Journal of Education & Social Policy", to: "/jesp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 16, name: "Journal of Social Science for Policy Implications", to: "/jsspi", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 17, name: "Journal of Sociology and Social Work", to: "/jssw", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 18, name: "Journal of Social Welfare and Human Rights", to: "/jswhr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 19, name: "Public Policy and Administration Review", to: "/ppar", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 20, name: "Journal of Global Peace and Conflict", to: "/jges", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 21, name: "Journal of International Relations and Foreign Policy", to: "/jirfp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 22, name: "International Journal of Gender and Womens Studies", to: "/ijgws", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 23, name: "Review of Arts and Humanities", to: "/rah", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 24, name: "International Journal of Art and Art History", to: "/ijaah", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 25, name: "International Journal of Music and Performing Arts", to: "/ijmpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 26, name: "International Multilingual Journal of Contemporary Research", to: "/imjcr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 27, name: "Journal of Law and Criminal Justice", to: "/jlcj", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 28, name: "Journal of Library and Information Sciences", to: "/jlis", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },

    ]

    const middleSubjects = [
        { id: 1, name: "International Journal of Business and Social Science", to: "/ijbss", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Journal of Business & Economic Policy", to: "/jbep", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "Journal of Management Policies and Practices", to: "/jmpp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "Journal of Economics and Development Studies", to: "/jeds", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 5, name: "Journal of Marketing Management", to: "/jmm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 6, name: "Journal of Finance and Bank Management", to: "/jfbm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Journal of Small Business and Entrepreneurship Development", to: "/jsbed", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 8, name: "Journal of Human Resources Management and Labor Studies", to: "/jhrmls", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 9, name: "Review of Contemporary Business Research", to: "/rcbr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 10, name: "International Journal of Accounting and Taxation", to: "/Ijatnet", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 11, name: "Journal of Administrative Sciences and Policy Studies", to: "/jasps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 12, name: "Journal of Business Law and Ethics", to: "/jble", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 13, name: "Journal of International Business and Economics", to: "/jibe", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 14, name: "Journal of Islamic Banking and Finance", to: "/jibf", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 15, name: "Journal of Tourism and Hospitality Management", to: "/jthm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 16, name: "Strategic Management Quarterly", to: "/smq", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 17, name: "Journal of Management Information System and E-commerce", to: "/jmise", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },


    ]
    const lastSubjects = [
        { id: 1, name: "International Journal of Applied Science and Technology", to: "/ijast", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: " Journal of Agriculture & Life Sciences", to: "/jals", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "Journal of Agriculture and Environmental Sciences", to: "/jaes", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "Journal of Computer Science and Information Technology", to: "/jcsit", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 5, name: "Journal of Engineering and Architecture", to: "/jea", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 6, name: "American International Journal of Biology", to: "/aijb", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Journal of Natural Sciences", to: "/jns", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 8, name: "American Review of Mathematics and Statistics", to: "/arms", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 9, name: "International Journal of Medicine and Pharmacy", to: "/ijmp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 10, name: "International Journal of Physics and Astronomy", to: "/ijpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 11, name: "International Journal of Nursing", to: "/ijn", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 12, name: "Journal of Chemistry and Biochemistry", to: "/jcb", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 13, name: "Journal of Physical Education and Sports Management", to: "/jpesm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 14, name: "International Journal of Health Sciences", to: "/ijhs", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 15, name: "International Journal of Business, Humanities and Technology", to: "/ijbht", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
    ]

    const multidisciplineSubjects = [
        { id: 1, name: "American International Journal of Contemporary Research", to: "/aijcr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "International Journal of Business, Humanities and Technology", to: "/ijbht", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
       
    ]
    const MultilanguageSubjects = [
        { id: 1, name: "International Multilingual Journal of Contemporary Research", to: "/imjcr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Journal of Foreign Languages, Cultures & Civilizations", to: "/jflcc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
       
    ]
    return (
        <div className="my-24">
            <PageTitle title="Complete List of Journals"></PageTitle>
            <div className="jornalsubs-bg">
                <div className='py-16 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12'>
                    <h2 className='text-2xl font-bold text-[#fff]'>Find Your Needed Journals...</h2>
                    <div className='flex items-center justify-between relative bg-[#fff] my-4 px-4 py-2 border rounded lg:w-2/4'>
                        <input className='border-transparent bg-transparent w-full outline-none' type="text" placeholder='Enter Name,Categories..' />
                        <p className='bg-[#91000D] text-[#fff] text-xl cursor-pointer hover:bg-[#833339] duration-300 absolute right-0 h-full rounded px-4  py-2'><FiSearch /></p>
                    </div>
                </div>
            </div>

            <RoutingTop>
                <div className='py-6 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12'>
                    <div className='flex items-center justify-center flex-col py-4'>
                        <h2 className='text-[#91000D] font-medium py-2 text-xl'>Complete List of Journals</h2>
                        <p className='text-[#072159d5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-[#91000cb5]'>Ab quaerat fuga,
                            consectetur eos quibusdam ipsam</span>.</p>
                    </div>

                    <div className='gap-4 space-y-4 my-6'>

                        <div className=''>
                            <h2 className='text-xl font-bold py-2 text-[#91000D]'>Arts, Humanities and Social Science</h2>
                            <div className='space-y-2'>
                                {
                                    leftSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className=' gap-3'>
                                                <p className='font-medium text-[#072159d5] hover:text-[#91000D] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>

                        <div className=''>
                            <h2 className='text-xl font-bold py-2 text-[#072159]'>Business and Economics</h2>
                            <div className='space-y-2'>
                                {
                                    middleSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className=' gap-2'>
                                                <p className='font-medium text-[#91000cb5] hover:text-[#072159] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>


                        <div className=''>
                            <h2 className='text-xl font-bold py-2 text-[#91000D]'>Science and Technology</h2>
                            <div className='space-y-2'>
                                {
                                    lastSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className=' gap-2'>
                                                <p className='font-medium text-[#072159] hover:text-[#91000cb5] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>


                        <div className=''>
                            <h2 className='text-xl font-bold py-2 text-[#072159]'>Multidiscipline Journals</h2>
                            <div className='space-y-2'>
                                {
                                    multidisciplineSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className=' gap-2'>
                                                <p className='font-medium text-[#91000cb5] hover:text-[#072159] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>


                        <div className=''>
                            <h2 className='text-xl font-bold py-2 text-[#91000cb5]'>Multilanguage Journals <span className='text-sm text-[#072159]'>[Published in Author’s Preferred Languages]</span> </h2>
                            <div className='space-y-2'>
                                {
                                    MultilanguageSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className=' gap-2'>
                                                <p className='font-medium text-[#072159] hover:text-[#91000cb5] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default CompletedList;