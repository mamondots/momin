import { NavLink } from "react-router-dom";

const HistoryNav = () => {
    const journalsNav = [
        { id: 1, name: "Rhps Home", to: "/rhps" },
        { id: 2, name: "Current Issue", to: "/rhps/current-rhps" },
        { id: 3, name: "Aims & Scope", to: "/rhps/scope-rhps" },
        { id: 4, name: "Editorial Boad", to: "/rhps/editorial-board" },
        { id: 6, name: "Submission", to: "/rhps/submission" },
        { id: 7, name: "Resources", to: "/rhps/resources" },
        { id: 9, name: "Journal Policies", to: "/rhps/policies" },
        { id: 10, name: "Useful Links", to: "/rhps/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/rhps/latest_activities"},
        { id: 12, name: "Subscription", to: "/rhps/subcription" },
        { id: 13, name: "Information", to: "/rhps/information" },
        { id: 14, name: "Index", to: "/rhps/index" },
        { id: 15, name: "Archive", to: "/rhps/archive-rhps" },
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

export default HistoryNav;