import { useState } from "react";
import CallForPapers from "./CallForPapers/CallForPapers";
import Submission from "../Submission/Submission";
import NativeLanguage from "./NativeLanguage/NativeLanguage";
import Subscribe from "../Subscribe/Subscribe";
import Questions from "./Questions/Questions";
import ToLibrarian from "./ToLibrarian/ToLibrarian";
import ToFriends from "./ToFriends/ToFriends";
import Comment from "./Comment/Comment";

const UseFullLinkPage = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Useful Links</h2>

            <div className="my-4">
                <div className='flex items-center flex-wrap gap-2 cursor-pointer text-sm font-medium'>
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 text-white bg-green-400 tabs"}

                    >Call for Papers</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}>
                        Submit
                    </button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Publish in Native Language</button>

                    <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Subscribe</button>

                    <button
                        onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Asked Questions</button>

                    <button
                        onClick={() => toggleTab(6)}
                        className={toggle === 6 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Contact Executive Editor</button>

                    <button
                        onClick={() => toggleTab(7)}
                        className={toggle === 7 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Recommend to Librarian</button>

                    <button
                        onClick={() => toggleTab(8)}
                        className={toggle === 8 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Recommend to Friends</button>

                    <button
                        onClick={() => toggleTab(9)}
                        className={toggle === 9 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Comment</button>
                </div>


                <div className="">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <CallForPapers></CallForPapers>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <div className="mt-8">
                            <Submission></Submission>
                        </div>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                        <NativeLanguage></NativeLanguage>
                    </div>
                    <div className={toggle === 4 ? "content active-content" : "content"}>
                        <div className="my-8">
                            <Subscribe></Subscribe>
                        </div>
                    </div>
                    <div className={toggle === 5 ? "content active-content" : "content"}>
                        <Questions></Questions>
                    </div>
                    <div className={toggle === 6 ? "content active-content" : "content"}>
                        6
                    </div>
                    <div className={toggle === 7 ? "content active-content" : "content"}>
                        <ToLibrarian></ToLibrarian>
                    </div>
                    <div className={toggle === 8 ? "content active-content" : "content"}>
                        <ToFriends></ToFriends>
                    </div>
                    <div className={toggle === 9 ? "content active-content" : "content"}>
                        <Comment></Comment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseFullLinkPage;