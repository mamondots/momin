import { NavLink } from "react-router-dom";

const SmallBusinessNav = () => {
    const journalsNav = [
        { id: 1, name: "Jsbed Home", to: "/jsbed" },
        { id: 2, name: "Current Issue", to: "/jsbed/current-jsbed" },
        { id: 3, name: "Aims & Scope", to: "/jsbed/scope-jsbed" },
        { id: 4, name: "Editorial Boad", to: "/jsbed/editorial-board" },
        { id: 6, name: "Submission", to: "/jsbed/submission" },
        { id: 7, name: "Resources", to: "/jsbed/resources" },
        { id: 9, name: "Journal Policies", to: "/jsbed/policies" },
        { id: 10, name: "Useful Links", to: "/jsbed/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jsbed/latest_activities" },
        { id: 12, name: "Subscription", to: "/jsbed/subcription" },
        { id: 13, name: "Information", to: "/jsbed/information" },
        { id: 14, name: "Index", to: "/jsbed/index" },
        { id: 15, name: "Archive", to: "/jsbed/archive-jsbed" },
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

export default SmallBusinessNav;