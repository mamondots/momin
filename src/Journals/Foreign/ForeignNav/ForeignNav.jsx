import { NavLink } from "react-router-dom";

const ForeignNav = () => {
    const journalsNav = [
        { id: 1, name: "Jirfp Home", to: "/jirfp" },
        { id: 2, name: "Current Issue", to: "/jirfp/current-jirfp" },
        { id: 3, name: "Aims & Scope", to: "/jirfp/scope-jirfp" },
        { id: 4, name: "Editorial Boad", to: "/jirfp/editorial-board" },
        { id: 6, name: "Submission", to: "/jirfp/submission" },
        { id: 7, name: "Resources", to: "/jirfp/resources" },
        { id: 9, name: "Journal Policies", to: "/jirfp/policies" },
        { id: 10, name: "Useful Links", to: "/jirfp/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jirfp/latest_activities" },
        { id: 12, name: "Subscription", to: "/jirfp/subcription" },
        { id: 13, name: "Information", to: "/jirfp/information" },
        { id: 14, name: "Index", to: "/jirfp/index" },
        { id: 15, name: "Archive", to: "/jirfp/archive-jirfp" },
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

export default ForeignNav;