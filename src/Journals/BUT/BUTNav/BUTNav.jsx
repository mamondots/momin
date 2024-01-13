import { NavLink } from "react-router-dom";

const BUTNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijbht Home", to: "/ijbht" },
        { id: 2, name: "Current Issue", to: "/ijbht/current-ijbht" },
        { id: 3, name: "Aims & Scope", to: "/ijbht/scope-ijbht" },
        { id: 4, name: "Editorial Board", to: "/ijbht/editorial-board" },
        { id: 6, name: "Submission", to: "/information/submission" },
        { id: 7, name: "Resources", to: "/ijbht/resources" },
        { id: 9, name: "Journal Policies", to: "/ijbht/policies" },
        { id: 10, name: "Useful Links", to: "/ijbht/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijbht/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijbht/subcription" },
        { id: 13, name: "Information", to: "/ijbht/information" },
        { id: 14, name: "Index", to: "/ijbht/index" },
        { id: 15, name: "Archive", to: "/ijbht/archive-ijbht" },
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

export default BUTNav;