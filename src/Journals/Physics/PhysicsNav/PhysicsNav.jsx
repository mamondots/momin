import { NavLink } from "react-router-dom";

const PhysicsNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijpa Home", to: "/ijpa" },
        { id: 2, name: "Current Issue", to: "/ijpa/current-ijpa" },
        { id: 3, name: "Aims & Scope", to: "/ijpa/scope-ijpa" },
        { id: 4, name: "Editorial Boad", to: "/ijpa/editorial-board" },
        { id: 6, name: "Submission", to: "/ijpa/submission" },
        { id: 7, name: "Resources", to: "/ijpa/resources" },
        { id: 9, name: "Journal Policies", to: "/ijpa/policies" },
        { id: 10, name: "Useful Links", to: "/ijpa/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijpa/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijpa/subcription" },
        { id: 13, name: "Information", to: "/ijpa/information" },
        { id: 14, name: "Index", to: "/ijpa/index" },
        { id: 15, name: "Archive", to: "/ijpa/archive-ijpa" },
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

export default PhysicsNav;