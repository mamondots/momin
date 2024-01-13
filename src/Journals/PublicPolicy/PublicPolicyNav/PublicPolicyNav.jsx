import { NavLink } from "react-router-dom";

const PublicPolicyNav = () => {
    const journalsNav = [
        { id: 1, name: "Ppar Home", to: "/ppar" },
        { id: 2, name: "Current Issue", to: "/ppar/current-ppar" },
        { id: 3, name: "Aims & Scope", to: "/ppar/scope-ppar" },
        { id: 4, name: "Editorial Boad", to: "/ppar/editorial-board" },
        { id: 6, name: "Submission", to: "/ppar/submission" },
        { id: 7, name: "Resources", to: "/ppar/resources" },
        { id: 9, name: "Journal Policies", to: "/ppar/policies" },
        { id: 10, name: "Useful Links", to: "/ppar/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ppar/latest_activities" },
        { id: 12, name: "Subscription", to: "/ppar/subcription" },
        { id: 13, name: "Information", to: "/ppar/information" },
        { id: 14, name: "Index", to: "/ppar/index" },
        { id: 15, name: "Archive", to: "/ppar/archive-ppar" },
        { id: 8, name: "Browse Journals", to: "/subjects" },
    ]
    return (
        <div className="border lg:w-1/3">
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

export default PublicPolicyNav;