import { NavLink } from "react-router-dom";

const BiochemistryNav = () => {
    const journalsNav = [
        { id: 1, name: "Jcb Home", to: "/jcb" },
        { id: 2, name: "Current Issue", to: "/jcb/current-jcb" },
        { id: 3, name: "Aims & Scope", to: "/jcb/scope-jcb" },
        { id: 4, name: "Editorial Boad", to: "/jcb/editorial-board" },
        { id: 6, name: "Submission", to: "/jcb/submission"},
        { id: 7, name: "Resources", to: "/jcb/resources" },
        { id: 9, name: "Journal Policies", to: "/jcb/policies" },
        { id: 10, name: "Useful Links", to: "/jcb/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jcb/latest_activities" },
        { id: 12, name: "Subscription", to: "/jcb/subcription" },
        { id: 13, name: "Information", to: "/jcb/information" },
        { id: 14, name: "Index", to: "/jcb/index" },
        { id: 15, name: "Archive", to: "/jcb/archive-jcb" },
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

export default BiochemistryNav;