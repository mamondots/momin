import { NavLink } from "react-router-dom";

const GenderNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijgws Home", to: "/ijgws" },
        { id: 2, name: "Current Issue", to: "/ijgws/current-ijgws" },
        { id: 3, name: "Aims & Scope", to: "/ijgws/scope-ijgws" },
        { id: 4, name: "Editorial Boad", to: "/ijgws/editorial-board" },
        { id: 6, name: "Submission", to: "/ijgws/submission" },
        { id: 7, name: "Resources", to: "/ijgws/resources" },
        { id: 9, name: "Journal Policies", to: "/ijgws/policies" },
        { id: 10, name: "Useful Links", to: "/ijgws/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijgws/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijgws/subcription" },
        { id: 13, name: "Information", to: "/ijgws/information" },
        { id: 14, name: "Index", to: "/ijgws/index" },
        { id: 15, name: "Archive", to: "/ijgws/archive-ijgws" },
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

export default GenderNav;