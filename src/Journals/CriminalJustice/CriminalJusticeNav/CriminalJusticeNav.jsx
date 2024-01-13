import { NavLink } from "react-router-dom";

const CriminalJusticeNav = () => {
    const journalsNav = [
        { id: 1, name: "Jlcj Home", to: "/jlcj" },
        { id: 2, name: "Current Issue", to: "/jlcj/current-jlcj" },
        { id: 3, name: "Aims & Scope", to: "/jlcj/scope-jlcj" },
        { id: 4, name: "Editorial Boad", to: "/jlcj/editorial-board" },
        { id: 6, name: "Submission", to: "/jlcj/submission" },
        { id: 7, name: "Resources", to: "/jlcj/resources" },
        { id: 9, name: "Journal Policies", to: "/jlcj/policies" },
        { id: 10, name: "Useful Links", to: "/jlcj/usefull_link"},
        { id: 11, name: "Latest Activities", to: "/jlcj/latest_activities"},
        { id: 12, name: "Subscription", to: "/jlcj/subcription" },
        { id: 13, name: "Information", to: "/jlcj/information"},
        { id: 14, name: "Index", to: "/jlcj/index" },
        { id: 15, name: "Archive", to: "/jlcj/archive-jlcj" },
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

export default CriminalJusticeNav;