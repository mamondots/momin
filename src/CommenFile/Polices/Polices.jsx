import { useState } from 'react';
import EPublication from './EPublication/EPublication.JSX';
import PlagiarismPolicy from './PlagiarismPolicy/PlagiarismPolicy';
import CopyrightPolicy from './CopyrightPolicy/CopyrightPolicy';
import ReviewPolicy from './ReviewPolicy/ReviewPolicy';




const Polices = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Journal Policies</h2>

            <div className='my-4'>
                <div className='flex items-center space-x-2 cursor-pointer text-sm font-medium'>
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 text-white bg-green-400 tabs"}

                    >E-Publication First<sup>TM</sup></button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}>Journal's Plagiarism Policy</button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Journal's Copyright Policy</button>

                    <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >Submission & Review Policy</button>
                </div>

                <div className="">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <EPublication></EPublication>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                       <PlagiarismPolicy></PlagiarismPolicy>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                        <CopyrightPolicy></CopyrightPolicy>
                    </div>
                    <div className={toggle === 4 ? "content active-content" : "content"}>
                        <ReviewPolicy></ReviewPolicy>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Polices;