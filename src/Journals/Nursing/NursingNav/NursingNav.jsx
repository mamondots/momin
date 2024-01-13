import { NavLink } from "react-router-dom";

const NursingNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijn Home", to: "/ijn" },
        { id: 2, name: "Current Issue", to: "/ijn/current-ijn" },
        { id: 3, name: "Aims & Scope", to: "/ijn/scope-ijn" },
        { id: 4, name: "Editorial Boad", to: "/ijn/editorial-board" },
        { id: 6, name: "Submission", to: "/ijn/submission" },
        { id: 7, name: "Resources", to: "/ijn/resources" },
        { id: 9, name: "Journal Policies", to: "/ijn/policies" },
        { id: 10, name: "Useful Links", to: "/ijn/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijn/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijn/subcription" },
        { id: 13, name: "Information", to: "/ijn/information" },
        { id: 14, name: "Index", to: "/ijn/index" },
        { id: 15, name: "Archive", to: "/ijn/archive-ijn" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/3">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
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

export default NursingNav;