import { NavLink } from "react-router-dom";

const EcommerceNav = () => {
    const journalsNav = [
        { id: 1, name: "Jmise Home", to: "/jmise" },
        { id: 2, name: "Current Issue", to: "/jmise/current-jmise" },
        { id: 3, name: "Aims & Scope", to: "/jmise/scope-jmise" },
        { id: 4, name: "Editorial Boad", to: "/jmise/editorial-board" },
        { id: 6, name: "Submission", to: "/jmise/submission" },
        { id: 7, name: "Resources", to: "/jmise/resources" },
        { id: 9, name: "Journal Policies", to: "/jmise/policies" },
        { id: 10, name: "Useful Links", to: "/jmise/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jmise/latest_activities" },
        { id: 12, name: "Subscription", to: "/jmise/subcription" },
        { id: 13, name: "Information", to: "/jmise/information" },
        { id: 14, name: "Index", to: "/jmise/index" },
        { id: 15, name: "Archive", to: "/jmise/archive-jmise" },
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

export default EcommerceNav;