import { useState } from 'react';
import './Resouch.css'
import Manuscript from './Manuscript/Manuscript';
import WEG6thEdition from './WEG6thEdition/WEG6thEdition';
import ReviewBook from './ReviewBook/ReviewBook';
import ResearchPaper from './ResearchPaper/ResearchPaper';
import GoogleTranslator from './GoogleTranslator/GoogleTranslator';
import ResearchGuidelines from './ResearchGuidelines/ResearchGuidelines';
const Resouch = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="w-full">
            <h2 className="font-bold text-[#91000D] aimsscope">Resources</h2>

            <div className='my-4'>
                <div className='flex items-center space-x-2 cursor-pointer text-sm font-medium'>
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 text-white bg-green-400 tabs"}

                    >Manuscript Preparation Guidelines</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}>APA Style (6th Edition)</button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Review a book</button>

                    <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Research paper</button>

                    <button
                        onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Google  Translator</button>

                    <button
                        onClick={() => toggleTab(6)}
                        className={toggle === 6 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Research Guidelines</button>

                </div>

                <div className="">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                       <Manuscript></Manuscript>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                        <WEG6thEdition></WEG6thEdition>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                       <ReviewBook></ReviewBook>
                    </div>
                    <div className={toggle === 4 ? "content active-content" : "content"}>
                        <ResearchPaper></ResearchPaper>
                    </div>
                    <div className={toggle === 5 ? "content active-content" : "content"}>
                        <GoogleTranslator></GoogleTranslator>
                    </div>
                    <div className={toggle === 6 ? "content active-content" : "content"}>
                        <ResearchGuidelines></ResearchGuidelines>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Resouch;