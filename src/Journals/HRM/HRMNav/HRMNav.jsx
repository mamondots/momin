import { NavLink } from "react-router-dom";

const HRMNav = () => {
    const journalsNav = [
        { id: 1, name: "Jhrmls Home", to: "/jhrmls" },
        { id: 2, name: "Current Issue", to: "/jhrmls/current-jhrmls" },
        { id: 3, name: "Aims & Scope", to: "/jhrmls/scope-jhrmls" },
        { id: 4, name: "Editorial Boad", to: "/jhrmls/editorial-board" },
        { id: 6, name: "Submission", to: "/jhrmls/submission" },
        { id: 7, name: "Resources", to: "/jhrmls/resources" },
        { id: 9, name: "Journal Policies", to: "/jhrmls/policies" },
        { id: 10, name: "Useful Links", to: "/jhrmls/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jhrmls/latest_activities" },
        { id: 12, name: "Subscription", to: "/jhrmls/subcription" },
        { id: 13, name: "Information", to: "/jhrmls/information" },
        { id: 14, name: "Index", to: "/jhrmls/index" },
        { id: 15, name: "Archive", to: "/jhrmls/archive-jhrmls" },
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

export default HRMNav;