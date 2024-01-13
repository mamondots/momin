import { NavLink } from "react-router-dom";

const LifeNav = () => {
    const journalsNav = [
        { id: 1, name: "Jals Home", to: "/jals" },
        { id: 2, name: "Current Issue", to: "/jals/current-jals" },
        { id: 3, name: "Aims & Scope", to: "/jals/scope-jals" },
        { id: 4, name: "Editorial Boad", to: "/jals/editorial-board" },
        { id: 6, name: "Submission", to: "/jals/submisition" },
        { id: 7, name: "Resources", to: "/jals/resources" },
        { id: 9, name: "Journal Policies", to: "/jals/policies" },
        { id: 10, name: "Useful Links", to: "/jals/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jals/latest_activities" },
        { id: 12, name: "Subscription", to: "/jals/subcription" },
        { id: 13, name: "Information", to: "/jals/information" },
        { id: 14, name: "Index", to: "/jals/index" },
        { id: 15, name: "Archive", to: "/jals/archive-jals" },
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

export default LifeNav;