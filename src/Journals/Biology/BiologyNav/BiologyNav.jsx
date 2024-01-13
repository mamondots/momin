import { NavLink } from "react-router-dom";

const BiologyNav = () => {
    const journalsNav = [
        { id: 1, name: "Aijb Home", to: "/aijb" },
        { id: 2, name: "Current Issue", to: "/aijb/current-aijb" },
        { id: 3, name: "Aims & Scope", to: "/aijb/scope-aijb" },
        { id: 4, name: "Editorial Boad", to: "/aijb/editorial-board" },
        { id: 6, name: "Submission", to: "/aijb/submission" },
        { id: 7, name: "Resources", to: "/aijb/resources" },
        { id: 9, name: "Journal Policies", to: "/aijb/policies" },
        { id: 10, name: "Useful Links", to: "/aijb/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/aijb/latest_activities" },
        { id: 12, name: "Subscription", to: "/aijb/subcription" },
        { id: 13, name: "Information", to: "/aijb/information" },
        { id: 14, name: "Index", to: "/aijb/index" },
        { id: 15, name: "Archive", to: "/aijb/archive-aijb" },
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

export default BiologyNav;