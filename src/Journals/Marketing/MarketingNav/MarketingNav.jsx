import { NavLink } from "react-router-dom";

const MarketingNav = () => {
    const journalsNav = [
        { id: 1, name: "Jmm Home", to: "/jmm" },
        { id: 2, name: "Current Issue", to: "/jmm/current-jmm" },
        { id: 3, name: "Aims & Scope", to: "/jmm/scope-jmm" },
        { id: 4, name: "Editorial Boad", to: "/jmm/editorial-board" },
        { id: 6, name: "Submission", to: "/jmm/submission" },
        { id: 7, name: "Resources", to: "/jmm/resources" },
        { id: 9, name: "Journal Policies", to: "/jmm/policies" },
        { id: 10, name: "Useful Links", to: "/jmm/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jmm/latest_activities" },
        { id: 12, name: "Subscription", to: "/jmm/subcription" },
        { id: 13, name: "Information", to: "/jmm/information" },
        { id: 14, name: "Index", to: "/jmm/index" },
        { id: 15, name: "Archive", to: "/jmm/archive-jmm" },
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

export default MarketingNav;