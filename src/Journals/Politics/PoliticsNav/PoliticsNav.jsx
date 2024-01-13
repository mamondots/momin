import { NavLink } from "react-router-dom";

const PoliticsNav = () => {
    const journalsNav = [
        { id: 1, name: "Jppg Home", to: "/jppg" },
        { id: 2, name: "Current Issue", to: "/jppg/current-jppg" },
        { id: 3, name: "Aims & Scope", to: "/jppg/scope-jppg" },
        { id: 4, name: "Editorial Boad", to: "/jppg/editorial-board" },
        { id: 6, name: "Submission", to: "/jppg/submission" },
        { id: 7, name: "Resources", to: "/jppg/resources" },
        { id: 9, name: "Journal Policies", to: "/jppg/policies" },
        { id: 10, name: "Useful Links", to: "/jppg/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jppg/latest_activities" },
        { id: 12, name: "Subscription", to: "/jppg/subcription" },
        { id: 13, name: "Information", to: "/jppg/information" },
        { id: 14, name: "Index", to: "/jppg/index" },
        { id: 15, name: "Archive", to: "/jppg/archive-jppg" },
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

export default PoliticsNav;