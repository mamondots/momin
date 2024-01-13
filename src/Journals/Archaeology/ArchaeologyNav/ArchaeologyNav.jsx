import { NavLink } from "react-router-dom";

const ArchaeologyNav = () => {
    const journalsNav = [
        { id: 1, name: "Jaa Home", to: "/jaa" },
        { id: 2, name: "Current Issue", to: "/jaa/current-jaa" },
        { id: 3, name: "Aims & Scope", to: "/jaa/scope-jaa" },
        { id: 4, name: "Editorial Boad", to: "/jaa/editorial-board" },
        { id: 6, name: "Submission", to: "/jaa/submission" },
        { id: 7, name: "Resources", to: "/jaa/resources" },
        { id: 9, name: "Journal Policies", to: "/jaa/policies" },
        { id: 10, name: "Useful Links", to: "/jaa/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jaa/latest_activities" },
        { id: 12, name: "Subscription", to: "/jaa/subcription" },
        { id: 13, name: "Information", to: "/jaa/information" },
        { id: 14, name: "Index", to: "/jaa/index" },
        { id: 15, name: "Archive", to: "/jaa/archive-jaa" },
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

export default ArchaeologyNav;