import { NavLink } from "react-router-dom";

const SportsNav = () => {
    const journalsNav = [
        { id: 1, name: "Jpesm Home", to: "/jpesm" },
        { id: 2, name: "Current Issue", to: "/jpesm/current-jpesm" },
        { id: 3, name: "Aims & Scope", to: "/jpesm/scope-jpesm" },
        { id: 4, name: "Editorial Boad", to: "/jpesm/editorial-board" },
        { id: 6, name: "Submission", to: "/jpesm/submission" },
        { id: 7, name: "Resources", to: "/jpesm/resources" },
        { id: 9, name: "Journal Policies", to: "/jpesm/policies" },
        { id: 10, name: "Useful Links", to: "/jpesm/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jpesm/latest_activities" },
        { id: 12, name: "Subscription", to: "/jpesm/subcription" },
        { id: 13, name: "Information", to: "/jpesm/information" },
        { id: 14, name: "Index", to: "/jpesm/index" },
        { id: 15, name: "Archive", to: "/jpesm/archive-jpesm" },
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

export default SportsNav;