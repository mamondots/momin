import { NavLink } from "react-router-dom";

const EducationNav = () => {
    const journalsNav = [
        { id: 1, name: "Jehd Home", to: "/jehd" },
        { id: 2, name: "Current Issue", to: "/jehd/current-jehd" },
        { id: 3, name: "Aims & Scope", to: "/jehd/scope-jehd" },
        { id: 4, name: "Editorial Boad", to: "/jehd/editorial-board" },
        { id: 6, name: "Submission", to: "/jehd/submission" },
        { id: 7, name: "Resources", to: "/jehd/resources" },
        { id: 9, name: "Journal Policies", to: "/jehd/policies" },
        { id: 10, name: "Useful Links", to: "/jehd/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jehd/latest_activities" },
        { id: 12, name: "Subscription", to: "/jehd/subcription" },
        { id: 13, name: "Information", to: "/jehd/information" },
        { id: 14, name: "Index", to: "/jehd/index" },
        { id: 15, name: "Archive", to: "/jehd/archive-jed" },
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

export default EducationNav;