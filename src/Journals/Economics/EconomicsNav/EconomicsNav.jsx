import { NavLink } from "react-router-dom";

const EconomicsNav = () => {
    const journalsNav = [
        { id: 1, name: "Home", to: "/jeds" },
        { id: 2, name: "Current Issue", to: "/jeds/current-jeds" },
        { id: 3, name: "Aims & Scope", to: "/jeds/scope-jeds" },
        { id: 4, name: "Editorial Boad", to: "/jeds/editorial-board" },
        { id: 6, name: "Submission", to: "/jeds/submission" },
        { id: 7, name: "Resources", to: "/jeds/resources" },
        { id: 9, name: "Journal Policies", to: "/jeds/policies" },
        { id: 10, name: "Useful Links", to: "/jeds/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jeds/latest_activities"},
        { id: 12, name: "Subscription", to: "/jeds/subcription" },
        { id: 13, name: "Information", to: "/jeds/information" },
        { id: 14, name: "Index", to: "/jeds/index" },
        { id: 15, name: "Archive", to: "/jeds/archive-jeds" },
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

export default EconomicsNav;