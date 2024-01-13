import { NavLink } from "react-router-dom";

const ManagementNav = () => {
    const journalsNav = [
        { id: 1, name: "Jmpp Home", to: "/jmpp" },
        { id: 2, name: "Current Issue", to: "/jmpp/current-jmpp" },
        { id: 3, name: "Aims & Scope", to: "/jmpp/scope-jmpp" },
        { id: 4, name: "Editorial Boad", to: "/jmpp/editorial-board" },
        { id: 6, name: "Submission", to: "/jmpp/submission" },
        { id: 7, name: "Resources", to: "/jmpp/resources" },
        { id: 9, name: "Journal Policies", to: "/jmpp/policies" },
        { id: 10, name: "Useful Links", to: "/jmpp/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jmpp/latest_activities" },
        { id: 12, name: "Subscription", to: "/jmpp/subcription" },
        { id: 13, name: "Information", to: "/jmpp/information" },
        { id: 14, name: "Index", to: "/jmpp/index" },
        { id: 15, name: "Archive", to: "/jmpp/archive-jmpp" },
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

export default ManagementNav;