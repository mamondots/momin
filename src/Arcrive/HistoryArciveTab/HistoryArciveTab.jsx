import { useState } from "react";
import useArchives from "../../Hooks/useArchives";
import ArciveArticlesBox from "../../Articles/ArciveArticlesBox/ArciveArticlesBox";



const HistoryArciveTab = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index)
    }
    const [archives] = useArchives()
    const accountingArcives = archives.filter((archive) => archive.category === 'History')
    const accountingYeares1 = accountingArcives.filter((year) => year.year === '2023')
    const accountingYeares2 = accountingArcives.filter((year) => year.year === '2022')
    const accountingYeares3 = accountingArcives.filter((year) => year.year === '2021')
    const accountingYeares4 = accountingArcives.filter((year) => year.year === '2020')
    const accountingYeares5 = accountingArcives.filter((year) => year.year === '2019')
    const accountingYeares6 = accountingArcives.filter((year) => year.year === '2018')
    const accountingYeares7 = accountingArcives.filter((year) => year.year === '2017')
    const accountingYeares8 = accountingArcives.filter((year) => year.year === '2016')
    const accountingYeares9 = accountingArcives.filter((year) => year.year === '2015')
    const accountingYeares10 = accountingArcives.filter((year) => year.year === '2014')
    const accountingYeares11 = accountingArcives.filter((year) => year.year === '2013')
    return (
        <div className="w-full">

            <div className="my-8">
                <div className='flex items-center flex-wrap gap-2 cursor-pointer text-sm font-medium'>
                    <button
                        onClick={() => toggleTab(1)}
                        className={toggle === 1 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 text-white bg-green-400 tabs"}

                    >2023</button>

                    <button
                        onClick={() => toggleTab(2)}
                        className={toggle === 2 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}>
                        2022
                    </button>

                    <button
                        onClick={() => toggleTab(3)}
                        className={toggle === 3 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2021</button>

                    <button
                        onClick={() => toggleTab(4)}
                        className={toggle === 4 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2020</button>

                    <button
                        onClick={() => toggleTab(5)}
                        className={toggle === 5 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2019</button>

                    <button
                        onClick={() => toggleTab(6)}
                        className={toggle === 6 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2018</button>

                    <button
                        onClick={() => toggleTab(7)}
                        className={toggle === 7 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2017</button>

                    <button
                        onClick={() => toggleTab(8)}
                        className={toggle === 8 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2016</button>
                    <button
                        onClick={() => toggleTab(9)}
                        className={toggle === 9 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2015</button>
                    <button
                        onClick={() => toggleTab(10)}
                        className={toggle === 10 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2014</button>
                    <button
                        onClick={() => toggleTab(11)}
                        className={toggle === 11 ? "tabs active-tabs px-2 py-2" : "px-2 py-2 tabs"}
                    >2013</button>
                </div>


                <div className="my-6">
                    <div className={toggle === 1 ? "content active-content" : "content"}>
                        <div>
                            {
                                accountingYeares1.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 2 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares2.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 3 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares3.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 4 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares4.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 5 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares5.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 6 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares6.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 7 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares7.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 8 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares8.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 9 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares9.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>
                    <div className={toggle === 10 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares10.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>

                    <div className={toggle === 11 ? "content active-content" : "content"}>
                    <div>
                            {
                                accountingYeares11.map(accountingYear1 => <ArciveArticlesBox key={accountingYear1._id} articles={accountingYear1}>

                                </ArciveArticlesBox>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HistoryArciveTab;