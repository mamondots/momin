import { NavLink } from "react-router-dom";

const HumanRightsNav = () => {
    const journalsNav = [
        { id: 1, name: "Jswhr Home", to: "/jswhr" },
        { id: 2, name: "Current Issue", to: "/jswhr/current-jswhr" },
        { id: 3, name: "Aims & Scope", to: "/jswhr/scope-jswhr" },
        { id: 4, name: "Editorial Boad", to: "/jswhr/editorial-board" },
        { id: 6, name: "Submission", to: "/jswhr/submission" },
        { id: 7, name: "Resources", to: "/jswhr/resources" },
        { id: 9, name: "Journal Policies", to: "/jswhr/policies" },
        { id: 10, name: "Useful Links", to: "/jswhr/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jswhr/latest_activities" },
        { id: 12, name: "Subscription", to: "/jswhr/subcription" },
        { id: 13, name: "Information", to: "/jswhr/information" },
        { id: 14, name: "Index", to: "/jswhr/index" },
        { id: 15, name: "Archive", to: "/jswhr/archive-jswhr" },
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

export default HumanRightsNav;