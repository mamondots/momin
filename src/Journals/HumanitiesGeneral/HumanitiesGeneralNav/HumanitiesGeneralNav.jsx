import { NavLink } from "react-router-dom";

const HumanitiesGeneralNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijhss Home", to: "/ijhss" },
        { id: 2, name: "Current Issue", to: "/ijhss/current-ijhss" },
        { id: 3, name: "Aims & Scope", to: "/ijhss/scope-ijhss" },
        { id: 4, name: "Editorial Board", to: "/ijhss/editorial-board" },
        { id: 6, name: "Submission", to: "/ijhss/submission" },
        { id: 7, name: "Resources", to: "/ijhss/resources" },
        { id: 9, name: "Journal Policies", to: "/ijhss/policies" },
        { id: 10, name: "Useful Links", to: "/ijhss/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijhss/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijhss/subcription" },
        { id: 13, name: "Information", to: "/ijhss/information" },
        { id: 14, name: "Index", to: "/ijhss/index" },
        { id: 15, name: "Archive", to: "/ijhss/archive-ijhss" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/4">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2 >Journal Menu</h2>
            </div>
            {
                journalsNav.map(nav => <li className="list-none " key={nav.id}>
                    <NavLink to={nav.to}>
                    <p className="JournalLink">{nav.name}</p>
                    </NavLink>
                </li>)
            }
        </div>
    );
};

export default HumanitiesGeneralNav;