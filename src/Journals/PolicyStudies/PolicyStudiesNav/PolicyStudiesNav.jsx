import { NavLink } from "react-router-dom";

const PolicyStudiesNav = () => {
    const journalsNav = [
        { id: 1, name: "Jasps Home", to: "/jasps" },
        { id: 2, name: "Current Issue", to: "/jasps/current-jasps" },
        { id: 3, name: "Aims & Scope", to: "/jasps/scope-jasps" },
        { id: 4, name: "Editorial Boad", to: "/jasps/editorial-board" },
        { id: 6, name: "Submission", to: "/jasps/submission" },
        { id: 7, name: "Resources", to: "/jasps/resources" },
        { id: 9, name: "Journal Policies", to: "/jasps/policies" },
        { id: 10, name: "Useful Links", to: "/jasps/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jasps/latest_activities" },
        { id: 12, name: "Subscription", to: "/jasps/subcription" },
        { id: 13, name: "Information", to: "/jasps/information" },
        { id: 14, name: "Index", to: "/jasps/index" },
        { id: 15, name: "Archive", to: "/jasps/archive-jasps" },
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

export default PolicyStudiesNav;