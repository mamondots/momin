import { NavLink } from "react-router-dom";

const BusinessGeneralNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijbss Home", to: "/ijbss" },
        { id: 2, name: "Current Issue", to: "/ijbss/current-ijbss" },
        { id: 3, name: "Aims & Scope", to: "/ijbss/scope-ijbss" },
        { id: 4, name: "Editorial Boad", to: "/ijbss/editorial-board" },
        { id: 6, name: "Submission", to: "/ijbss/submission" },
        { id: 7, name: "Resources", to: "/ijbss/resources" },
        { id: 9, name: "Journal Policies", to: "/ijbss/policies" },
        { id: 10, name: "Useful Links", to: "/ijbss/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijbss/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijbss/subcription" },
        { id: 13, name: "Information", to: "/ijbss/information" },
        { id: 14, name: "Index", to: "/ijbss/index" },
        { id: 15, name: "Archive", to: "/ijbss/archive-ijbss" },
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

export default BusinessGeneralNav;