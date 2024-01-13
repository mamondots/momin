import { NavLink } from "react-router-dom";

const BusinessEthicsNav = () => {
    const journalsNav = [
        { id: 1, name: "Home", to: "/jble" },
        { id: 2, name: "Current Issue", to: "/jble/current-jble" },
        { id: 3, name: "Aims & Scope", to: "/jble/scope-jble" },
        { id: 4, name: "Editorial Boad", to: "/jble/editorial-board" },
        { id: 6, name: "Submission", to: "/jble/submission" },
        { id: 7, name: "Resources", to: "/jble/resources" },
        { id: 9, name: "Journal Policies", to: "/jble/policies" },
        { id: 10, name: "Useful Links", to: "/jble/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jble/latest_activities" },
        { id: 12, name: "Subscription", to: "/jble/subcription" },
        { id: 13, name: "Information", to: "/jble/information" },
        { id: 14, name: "Index", to: "/jble/index" },
        { id: 15, name: "Archive", to: "/jble/archive-jble" },
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

export default BusinessEthicsNav;