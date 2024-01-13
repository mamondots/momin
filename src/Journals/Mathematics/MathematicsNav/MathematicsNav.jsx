import { NavLink } from "react-router-dom";

const MathematicsNav = () => {
    const journalsNav = [
        { id: 1, name: "Arms Home", to: "/arms" },
        { id: 2, name: "Current Issue", to: "/arms/current-arms" },
        { id: 3, name: "Aims & Scope", to: "/arms/scope-arms" },
        { id: 4, name: "Editorial Boad", to: "/arms/editorial-board" },
        { id: 6, name: "Submission", to: "/arms/submission" },
        { id: 7, name: "Resources", to: "/arms/resources" },
        { id: 9, name: "Journal Policies", to: "/arms/policies" },
        { id: 10, name: "Useful Links", to: "/arms/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/arms/latest_activities" },
        { id: 12, name: "Subscription", to: "/arms/subcription" },
        { id: 13, name: "Information", to: "/arms/information" },
        { id: 14, name: "Index", to: "/arms/index" },
        { id: 15, name: "Archive", to: "/arms/archive-arms" },
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

export default MathematicsNav;