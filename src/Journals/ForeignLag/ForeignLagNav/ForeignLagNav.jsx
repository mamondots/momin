import { NavLink } from "react-router-dom";

const ForeignLagNav = () => {
    const journalsNav = [
        { id: 1, name: "Jflcc Home", to: "/jflcc" },
        { id: 2, name: "Current Issue", to: "/jflcc/current-jflcc" },
        { id: 3, name: "Aims & Scope", to: "/jflcc/scope-jflcc" },
        { id: 4, name: "Editorial Boad", to: "/jflcc/editorial-board" },
        { id: 6, name: "Submission", to: "/jflcc/submission" },
        { id: 7, name: "Resources", to: "/jflcc/resources" },
        { id: 9, name: "Journal Policies", to: "/jflcc/policies" },
        { id: 10, name: "Useful Links", to: "/jflcc/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jflcc/latest_activities"},
        { id: 12, name: "Subscription", to: "/jflcc/subcription" },
        { id: 13, name: "Information", to: "/jflcc/information" },
        { id: 14, name: "Index", to: "/jflcc/index" },
        { id: 15, name: "Archive", to: "/jflcc/archive-jflcc" },
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

export default ForeignLagNav;