import { NavLink } from "react-router-dom";

const InternationalNav = () => {
    const journalsNav = [
        { id: 1, name: "Jibe Home", to: "/jibe" },
        { id: 2, name: "Current Issue", to: "/jibe/current-jibe" },
        { id: 3, name: "Aims & Scope", to: "/jibe/scope-jibe" },
        { id: 4, name: "Editorial Board", to: "/jibe/editorial-board" },
        { id: 6, name: "Submission", to: "/jibe/submission" },
        { id: 7, name: "Resources", to: "/jibe/resources" },
        { id: 9, name: "Journal Policies", to: "/jibe/policies" },
        { id: 10, name: "Useful Links", to: "/information/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/information/latest_activities" },
        { id: 12, name: "Subscription", to: "/information/subcription" },
        { id: 13, name: "Information", to: "/information/information" },
        { id: 14, name: "Index", to: "/information/index" },
        { id: 15, name: "Archive", to: "/jibe/archive-jibe" },
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

export default InternationalNav;