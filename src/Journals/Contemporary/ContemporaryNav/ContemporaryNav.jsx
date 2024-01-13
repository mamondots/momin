import { NavLink } from "react-router-dom";

const ContemporaryNav = () => {
    const journalsNav = [
        { id: 1, name: "Rcbr Home", to: "/rcbr" },
        { id: 2, name: "Current Issue", to: "/rcbr/current-rcbr" },
        { id: 3, name: "Aims & Scope", to: "/rcbr/scope-rcbr" },
        { id: 4, name: "Editorial Boad", to: "/rcbr/editorial-board" },
        { id: 6, name: "Submission", to: "/rcbr/submission" },
        { id: 7, name: "Resources", to: "/rcbr/resources" },
        { id: 9, name: "Journal Policies", to: "/rcbr/policies" }, 
        { id: 10, name: "Useful Links", to: "/rcbr/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/rcbr/latest_activities" },
        { id: 12, name: "Subscription", to: "/rcbr/subcription" },
        { id: 13, name: "Information", to: "/rcbr/information" },
        { id: 14, name: "Index", to: "/rcbr/index" },
        { id: 15, name: "Archive", to: "/rcbr/archive-rcbr" },
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

export default ContemporaryNav;