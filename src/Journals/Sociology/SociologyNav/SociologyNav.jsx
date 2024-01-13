import { NavLink } from "react-router-dom";

const SociologyNav = () => {
    const journalsNav = [
        { id: 1, name: "Jssw Home", to: "/jssw" },
        { id: 2, name: "Current Issue", to: "/jssw/current-jssw" },
        { id: 3, name: "Aims & Scope", to: "/jssw/scope-jssw" },
        { id: 4, name: "Editorial Boad", to: "/jssw/editorial-board" },
        { id: 6, name: "Submission", to: "/jssw/submission" },
        { id: 7, name: "Resources", to: "/jssw/resources" },
        { id: 9, name: "Journal Policies", to: "/jssw/policies" },
        { id: 10, name: "Useful Links", to: "/jssw/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jssw/latest_activities" },
        { id: 12, name: "Subscription", to: "/jssw/subcription" },
        { id: 13, name: "Information", to: "/jssw/information" },
        { id: 14, name: "Index", to: "/jssw/index" },
        { id: 15, name: "Archive", to: "/jssw/archive-jssw" },
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

export default SociologyNav;