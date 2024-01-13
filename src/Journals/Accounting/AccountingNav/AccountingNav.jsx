import { Link, NavLink } from "react-router-dom";

const AccountingNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijat Home", to: "/Ijatnet" },
        { id: 2, name: "Current Issue", to: "/Ijatnet/current-ijat" },
        { id: 3, name: "Aims & Scope", to: "/Ijatnet/scope-ijat" },
        { id: 4, name: "Editorial Boad", to: "/Ijatnet/editorial-board" },
        // { id: 6, name: "Submission", to: "/information/submission" },
        { id: 7, name: "Resources", to: "/information/resources" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
        { id: 9, name: "Journal Policies", to: "/information/policies" },
        { id: 10, name: "Useful Links", to: "/information/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/information/latest_activities" },
        { id: 12, name: "Subscription", to: "/information/subcription" },
        { id: 13, name: "Information", to: "/information/information" },
        { id: 14, name: "Index", to: "/information/index" },
        { id: 15, name: "Archive", to: "/Ijatnet/archive-ijat" },
    ]
    return (
        <div className="border lg:w-1/4 ">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {/* {
                journalsNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#0A2258] text-[#0a2158b6] duration-300 hover:text-[#fff]  border-b cursor-pointer  px-8 " key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="py-3 font-medium text-sm">{nav.name}</p>
                    </NavLink>
                </li>)
            } */}

            <div className='w-full'>
                <li className="list-none w-full">
                    <Link to="/Ijatnet"><a href="" className="JournalLink">Ijat Home</a></Link>
                </li>
                <li className="list-none">
                    <NavLink to="/Ijatnet/current-ijat"><a href="" className="JournalLink">Current Issue</a></NavLink>
                </li>
                <li className="list-none">
                    <NavLink to='/Ijatnet/scope-ijat'>
                        <a href="" className="JournalLink">Aims & Scope</a>
                    </NavLink></li>
                <li className="list-none">
                    <NavLink to="/Ijatnet/editorial-board"><a href="" className="JournalLink">Editorial Boad</a></NavLink>
                </li>
                <li className="list-none">
                    <NavLink to="/Ijatnet/subscription"><a href="" className="JournalLink">Submission</a></NavLink>
                </li>
                <li className="list-none">
                    <NavLink to="/Ijatnet/resources"><a href="" className="JournalLink">Resources</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/policies"><a href="" className="JournalLink">Journal Policies</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/usefull_link"><a href="" className="JournalLink">Useful Links</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/latest_activities"><a href="" className="JournalLink">Latest Activities</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/subcription"><a href="" className="JournalLink">Subscription</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/information"><a href="" className="JournalLink">Information</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/index"><a href="" className="JournalLink">Index</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/Ijatnet/archive-ijat"><a href="" className="JournalLink">Archive</a></NavLink>
                </li>

                <li className="list-none">
                    <NavLink to="/subjects"><a href="" className="JournalLink">Browse Journals</a></NavLink>
                </li>
                
            </div>
        </div>
    );
};

export default AccountingNav;