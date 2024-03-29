import { useState } from "react";
import NativeLanguage from "../UseFullLinkPage/NativeLanguage/NativeLanguage";
import PublicationPlan from "./PublicationPlan/PublicationPlan";
import ResourcesforAuthors from "./ResourcesforAuthors/ResourcesforAuthors";

const ActivitiesPage = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Latest Activities</h2>

            <div className="my-4">
                <div className='flex items-center flex-wrap gap-2 cursor-pointer text-sm font-medium'>
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 text-white bg-green-400 tabs"}

                    >Recruitment of Reviewers</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}>
                        Publication Plan
                    </button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Resources for Authors</button>

                </div>

                <div className="">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <NativeLanguage></NativeLanguage>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <PublicationPlan></PublicationPlan>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                       <ResourcesforAuthors></ResourcesforAuthors>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ActivitiesPage;