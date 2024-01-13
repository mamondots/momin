import { NavLink } from "react-router-dom";

const ComputerScienceNav = () => {
    const journalsNav = [
        { id: 1, name: "Jcsit Home", to: "/jcsit" },
        { id: 2, name: "Current Issue", to: "/jcsit/current-jcsit" },
        { id: 3, name: "Aims & Scope", to: "/jcsit/scope-jcsit" },
        { id: 4, name: "Editorial Boad", to: "/jcsit/editorial-board" },
        { id: 6, name: "Submission", to: "/jcsit/submission" },
        { id: 7, name: "Resources", to: "/jcsit/resources" },
        { id: 9, name: "Journal Policies", to: "/jcsit/policies" },
        { id: 10, name: "Useful Links", to: "/jcsit/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jcsit/latest_activities" },
        { id: 12, name: "Subscription", to: "/jcsit/subcription" },
        { id: 13, name: "Information", to: "/jcsit/information" },
        { id: 14, name: "Index", to: "/information/index" },
        { id: 15, name: "Archive", to: "/jcsit/archive-jcsit" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/4">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none" key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="JournalLink">{nav.name}</p>
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default ComputerScienceNav;