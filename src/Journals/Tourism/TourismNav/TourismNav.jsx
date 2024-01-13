import { NavLink } from "react-router-dom";

const TourismNav = () => {
    const journalsNav = [
        { id: 1, name: "Jthm Home", to: "/jthm" },
        { id: 2, name: "Current Issue", to: "/jthm/current-jthm" },
        { id: 3, name: "Aims & Scope", to: "/jthm/scope-jthm" },
        { id: 4, name: "Editorial Boad", to: "/jthm/editorial-board" },
        { id: 6, name: "Submission", to: "/jthm/submission" },
        { id: 7, name: "Resources", to: "/jthm/resources" },
        { id: 9, name: "Journal Policies", to: "/jthm/policies" },
        { id: 10, name: "Useful Links", to: "/jthm/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/jthm/latest_activities" },
        { id: 12, name: "Subscription", to: "/jthm/subcription" },
        { id: 13, name: "Information", to: "/jthm/information" },
        { id: 14, name: "Index", to: "/jthm/index" },
        { id: 15, name: "Archive", to: "/jthm/archive-jthm" },
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

export default TourismNav;