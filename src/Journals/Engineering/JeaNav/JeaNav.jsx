import { NavLink } from "react-router-dom";

const JeaNav = () => {
    const journalsNav = [
        { id: 1, name: "Jea Home", to: "/jea" },
        { id: 2, name: "Current Issue", to: "/jea/current-jea" },
        { id: 3, name: "Aims & Scope", to: "/jea/scope-jea" },
        { id: 4, name: "Editorial Boad", to: "/jea/editorial-board" },
        { id: 6, name: "Submission", to: "/jea/submission" },
        { id: 7, name: "Resources", to: "/jea/resources" },
        { id: 9, name: "Journal Policies", to: "/jea/policies" },
        { id: 10, name: "Useful Links", to: "/jea/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jea/latest_activities" },
        { id: 12, name: "Subscription", to: "/jea/subcription" },
        { id: 13, name: "Information", to: "/jea/information" },
        { id: 14, name: "Index", to: "/jea/index" },
        { id: 15, name: "Archive", to: "/jea/archive-ijat" },
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

export default JeaNav;