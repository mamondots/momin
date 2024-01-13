import { NavLink } from "react-router-dom";

const BankManagementNav = () => {
    const journalsNav = [
        { id: 1, name: "Jfbm Home", to: "/jfbm" },
        { id: 2, name: "Current Issue", to: "/jfbm/current-jfbm" },
        { id: 3, name: "Aims & Scope", to: "/jfbm/scope-jfbm" },
        { id: 4, name: "Editorial Boad", to: "/jfbm/editorial-board" },
        { id: 6, name: "Submission", to: "/jfbm/submission" },
        { id: 7, name: "Resources", to: "/jfbm/resources" },
        { id: 9, name: "Journal Policies", to: "/jfbm/policies" },
        { id: 10, name: "Useful Links", to: "/jfbm/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jfbm/latest_activities" },
        { id: 12, name: "Subscription", to: "/jfbm/subcription" },
        { id: 13, name: "Information", to: "/jfbm/information" },
        { id: 14, name: "Index", to: "/jfbm/index" },
        { id: 15, name: "Archive", to: "/jfbm/archive-jfbm" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/4">
            <div className="bg-[#072159] border-b text-[#fff] text-center font-bold text-lg py-6">
                <h2>Journal Menu</h2>
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

export default BankManagementNav;