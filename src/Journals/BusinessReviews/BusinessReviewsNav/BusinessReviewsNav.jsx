import { NavLink } from "react-router-dom";

const BusinessReviewsNav = () => {
    const journalsNav = [
        { id: 1, name: "Brr Home", to: "/brr" },
        { id: 2, name: "Current Issue", to: "/brr/current-brr" },
        { id: 3, name: "Aims & Scope", to: "/brr/scope-brr" },
        { id: 4, name: "Editorial Board", to: "/brr/editorial-board" },
        { id: 6, name: "Submission", to: "/brr/submission" },
        { id: 7, name: "Resources", to: "/brr/resources" },
        { id: 9, name: "Journal Policies", to: "/brr/policies" },
        { id: 10, name: "Useful Links", to: "/brr/usefull_link" },
        { id: 11, name: "Latest Activities", to: "/brr/latest_activities" },
        { id: 12, name: "Subscription", to: "/brr/subcription" },
        { id: 13, name: "Information", to: "/brr/information" },
        { id: 14, name: "Index", to: "/brr/index" },
        { id: 15, name: "Archive", to: "/brr/archive-brr" },
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

export default BusinessReviewsNav;