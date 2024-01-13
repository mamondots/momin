import { NavLink } from "react-router-dom";

const CultureNav = () => {
    const journalsNav = [
        { id: 1, name: "Jisc Home", to: "/jisc" },
        { id: 2, name: "Current Issue", to: "/jisc/current-jisc" },
        { id: 3, name: "Aims & Scope", to: "/jisc/scope-jisc" },
        { id: 4, name: "Editorial Boad", to: "/jisc/editorial-board" },
        { id: 6, name: "Submission", to: "/jisc/submission" },
        { id: 7, name: "Resources", to: "/jisc/resources" },
        { id: 9, name: "Journal Policies", to: "/jisc/policies" },
        { id: 10, name: "Useful Links", to: "/jisc/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jisc/latest_activities" },
        { id: 12, name: "Subscription", to: "/jisc/subcription" },
        { id: 13, name: "Information", to: "/jisc/information" },
        { id: 14, name: "Index", to: "/jisc/index" },
        { id: 15, name: "Archive", to: "/jisc/archive-jisc" },
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

export default CultureNav;