import { NavLink } from "react-router-dom";

const EconomicPolicyNav = () => {
    const journalsNav = [
        { id: 1, name: "Jbep Home", to: "/jbep" },
        { id: 2, name: "Current Issue", to: "/jbep/current-jbep" },
        { id: 3, name: "Aims & Scope", to: "/jbep/scope-jbep" },
        { id: 4, name: "Editorial Board", to: "/jbep/editorial-board" },
        { id: 6, name: "Submission", to: "/jbep/submission" },
        { id: 7, name: "Resources", to: "/jbep/resources" },
        { id: 9, name: "Journal Policies", to: "/jbep/policies" },
        { id: 10, name: "Useful Links", to: "/jbep/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jbep/latest_activities" },
        { id: 12, name: "Subscription", to: "/jbep/subcription" },
        { id: 13, name: "Information", to: "/jbep/information" },
        { id: 14, name: "Index", to: "/jbep/index" },
        { id: 15, name: "Archive", to: "/jbep/archive-jbep" },
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

export default EconomicPolicyNav;