import { NavLink } from "react-router-dom";

const HealthNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijhs Home", to: "/ijhs" },
        { id: 2, name: "Current Issue", to: "/ijhs/current-ijhs" },
        { id: 3, name: "Aims & Scope", to: "/ijhs/scope-ijhs" },
        { id: 4, name: "Editorial Boad", to: "/ijhs/editorial-board" },
        { id: 6, name: "Submission", to: "/ijhs/submission" },
        { id: 7, name: "Resources", to: "/ijhs/resources" },
        { id: 9, name: "Journal Policies", to: "/ijhs/policies" },
        { id: 10, name: "Useful Links", to: "/ijhs/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijhs/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijhs/subcription" },
        { id: 13, name: "Information", to: "/ijhs/information" },
        { id: 14, name: "Index", to: "/ijhs/index" },
        { id: 15, name: "Archive", to: "/ijhs/archive-ijhs" },
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

export default HealthNav;