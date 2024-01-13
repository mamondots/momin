import { NavLink } from "react-router-dom";

const MusicNav = () => {
    const journalsNav = [
        { id: 1, name: "Ijmpa Home", to: "/ijmpa" },
        { id: 2, name: "Current Issue", to: "/ijmpa/current-ijmpa" },
        { id: 3, name: "Aims & Scope", to: "/ijmpa/scope-ijmpa" },
        { id: 4, name: "Editorial Boad", to: "/ijmpa/editorial-board" },
        { id: 6, name: "Submission", to: "/ijmpa/submission" },
        { id: 7, name: "Resources", to: "/ijmpa/resources" },
        { id: 9, name: "Journal Policies", to: "/ijmpa/policies" },
        { id: 10, name: "Useful Links", to: "/ijmpa/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/ijmpa/latest_activities" },
        { id: 12, name: "Subscription", to: "/ijmpa/subcription" },
        { id: 13, name: "Information", to: "/ijmpa/information" },
        { id: 14, name: "Index", to: "/ijmpa/index" },
        { id: 15, name: "Archive", to: "/ijmpa/archive-ijmpa" },
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

export default MusicNav;