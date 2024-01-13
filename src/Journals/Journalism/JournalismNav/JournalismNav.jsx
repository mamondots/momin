import { NavLink } from "react-router-dom";

const JournalismNav = () => {
    const journalsNav = [
        { id: 1, name: "Home", to: "/rjmc" },
        { id: 2, name: "Current Issue", to: "/rjmc/current-rjmc" },
        { id: 3, name: "Aims & Scope", to: "/rjmc/scope-rjmc" },
        { id: 4, name: "Editorial Boad", to: "/rjmc/editorial-board" },
        { id: 6, name: "Submission", to: "/information/submission" },
        { id: 7, name: "Resources", to: "/information/resources" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
        { id: 9, name: "Journal Policies", to: "/information/policies" },
        { id: 10, name: "Useful Links", to: "/information/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/information/latest_activities" },
        { id: 12, name: "Subscription", to: "/information/subcription" },
        { id: 13, name: "Information", to: "/information/information" },
        { id: 14, name: "Index", to: "/information/index" },
        { id: 15, name: "Archive", to: "/rjmc/archive-rjmc" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none bg-[#0a215805] hover:bg-[#0A2258] text-[#0a2158b6] duration-300 hover:text-[#fff] border-b cursor-pointer  px-8 " key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="py-3 font-medium ">{nav.name}</p>
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default JournalismNav;