import { NavLink } from "react-router-dom";

const ContemporaryGeneralNav = () => {
    const journalsNav = [
        { id: 1, name: "Aijcr Home", to: "/aijcr" },
        { id: 2, name: "Current Issue", to: "/aijcr/current-aijcr" },
        { id: 3, name: "Aims & Scope", to: "/aijcr/scope-aijcr" },
        { id: 4, name: "Editorial Boad", to: "/aijcr/editorial-board" },
        { id: 6, name: "Submission", to: "/aijcr/submission" },
        { id: 7, name: "Resources", to: "/aijcr/resources" },
        { id: 9, name: "Journal Policies", to: "/aijcr/policies" },
        { id: 10, name: "Useful Links", to: "/aijcr/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/aijcr/latest_activities" },
        { id: 12, name: "Subscription", to: "/aijcr/subcription" },
        { id: 13, name: "Information", to: "/aijcr/information" },
        { id: 14, name: "Index", to: "/aijcr/index" },
        { id: 15, name: "Archive", to: "/aijcr/archive-aijcr" },
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

export default ContemporaryGeneralNav;