import { NavLink } from "react-router-dom";

const PsychologyNav = () => {
    const journalsNav = [
        { id: 1, name: "Jpbs Home", to: "/jpbs" },
        { id: 2, name: "Current Issue", to: "/jpbs/current-jpbs" },
        { id: 3, name: "Aims & Scope", to: "/jpbs/scope-jpbs" },
        { id: 4, name: "Editorial Boad", to: "/jpbs/editorial-board" },
        { id: 6, name: "Submission", to: "/jpbs/submission" },
        { id: 7, name: "Resources", to: "/jpbs/resources" },
        { id: 9, name: "Journal Policies", to: "/jpbs/policies" },
        { id: 10, name: "Useful Links", to: "/jpbs/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jpbs/latest_activities" },
        { id: 12, name: "Subscription", to: "/jpbs/subcription" },
        { id: 13, name: "Information", to: "/jpbs/information" },
        { id: 14, name: "Index", to: "/jpbs/index" },
        { id: 15, name: "Archive", to: "/jpbs/archive-jpbs" },
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

export default PsychologyNav;