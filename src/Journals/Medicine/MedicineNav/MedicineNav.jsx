import { NavLink } from "react-router-dom";

const MedicineNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijmp Home", to: "/ijmp" },
        { id: 2, name: "Current Issue", to: "/ijmp/current-ijmp" },
        { id: 3, name: "Aims & Scope", to: "/ijmp/scope-ijmp" },
        { id: 4, name: "Editorial Boad", to: "/ijmp/editorial-board" },
        { id: 6, name: "Submission", to: "/ijmp/submission" },
        { id: 7, name: "Resources", to: "/ijmp/resources" },
        { id: 9, name: "Journal Policies", to: "/ijmp/policies" },
        { id: 10, name: "Useful Links", to: "/ijmp/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijmp/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijmp/subcription" },
        { id: 13, name: "Information", to: "/ijmp/information" },
        { id: 14, name: "Index", to: "/ijmp/index" },
        { id: 15, name: "Archive", to: "/ijmp/archive-ijmp" },
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

export default MedicineNav;