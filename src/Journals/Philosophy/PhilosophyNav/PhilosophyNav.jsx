import { NavLink } from "react-router-dom";

const PhilosophyNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijpt Home", to: "/ijpt" },
        { id: 2, name: "Current Issue", to: "/ijpt/current-ijpt" },
        { id: 3, name: "Aims & Scope", to: "/ijpt/scope-ijpt" },
        { id: 4, name: "Editorial Boad", to: "/ijpt/editorial-board" },
        { id: 6, name: "Submission", to: "/ijpt/submission" },
        { id: 7, name: "Resources", to: "/ijpt/resources" },
        { id: 9, name: "Journal Policies", to: "/ijpt/policies" },
        { id: 10, name: "Useful Links", to: "/ijpt/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijpt/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijpt/subcription" },
        { id: 13, name: "Information", to: "/ijpt/information" },
        { id: 14, name: "Index", to: "/ijpt/index" },
        { id: 15, name: "Archive", to: "/ijpt/archive-ijpt" },
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

export default PhilosophyNav;