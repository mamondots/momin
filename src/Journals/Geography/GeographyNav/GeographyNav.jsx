import { NavLink } from "react-router-dom";

const GeographyNav = () => {
    const journalsNav = [
        { id: 1, name: "Jges Home", to: "/jges" },
        { id: 2, name: "Current Issue", to: "/jges/current-jges" },
        { id: 3, name: "Aims & Scope", to: "/jges/scope-jges" },
        { id: 4, name: "Editorial Boad", to: "/jges/editorial-board" },
        { id: 6, name: "Submission", to: "/jges/submission" },
        { id: 7, name: "Resources", to: "/jges/resources" },
        { id: 9, name: "Journal Policies", to: "/jges/policies" },
        { id: 10, name: "Useful Links", to: "/jges/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jges/latest_activities"},
        { id: 12, name: "Subscription", to: "/jges/subcription" },
        { id: 13, name: "Information", to: "/jges/information" },
        { id: 14, name: "Index", to: "/jges/index" },
        { id: 15, name: "Archive", to: "/jges/archive-jges" },
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

export default GeographyNav;