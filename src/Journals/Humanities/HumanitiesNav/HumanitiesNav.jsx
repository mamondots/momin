import { NavLink } from "react-router-dom";

const HumanitiesNav = () => {
    const journalsNav = [
        { id: 1, name: "Rah Home", to: "/rah" },
        { id: 2, name: "Current Issue", to: "/rah/current-rah" },
        { id: 3, name: "Aims & Scope", to: "/rah/scope-rah" },
        { id: 4, name: "Editorial Boad", to: "/rah/editorial-board" },
        { id: 6, name: "Submission", to: "/rah/submission" },
        { id: 7, name: "Resources", to: "/rah/resources" },
        { id: 9, name: "Journal Policies", to: "/rah/policies" },
        { id: 10, name: "Useful Links", to: "/rah/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/rah/latest_activities" },
        { id: 12, name: "Subscription", to: "/rah/subcription" },
        { id: 13, name: "Information", to: "/rah/information" },
        { id: 14, name: "Index", to: "/rah/index" },
        { id: 15, name: "Archive", to: "/rah/archive-rah" },
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

export default HumanitiesNav;