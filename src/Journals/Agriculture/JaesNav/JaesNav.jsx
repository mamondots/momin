import { NavLink } from "react-router-dom";

const JaesNav = () => {
    const journalsNav = [
        { id: 1, name: "Jaes", to: "/jaes" },
        { id: 2, name: "Current Issue", to: "/jaes/current-jaes" },
        { id: 3, name: "Aims & Scope", to: "/jaes/scope-jaes" },
        { id: 4, name: "Editorial Boad", to: "/jaes/editorial-board" },
        { id: 12, name: "Submission", to: "/jaes/submission" },
        { id: 7, name: "Resources", to: "/jaes/resources" },
        { id: 9, name: "Journal Policies", to: "/jaes/policies" },
        { id: 10, name: "Useful Links", to: "/jaes/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jaes/latest_activities" },
        { id: 6, name: "Subscription", to: "/jaes/subscription" },
        { id: 13, name: "Information", to: "/jaes/information" },
        { id: 14, name: "Index", to: "/jaes/Index" },
        { id: 15, name: "Archive", to: "/jaes/archive-ijat" },
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

export default JaesNav;