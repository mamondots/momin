import { useEffect, useState } from "react";
import ResearchBox from "../HomePage/HomeResearch/ResearchBox/ResearchBox";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import './ResearchPage.css'
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const ResearchPage = () => {
    const [researces, setResearces] = useState([])
    useEffect(() => {
        fetch("research.json")
            .then(res => res.json())
            .then(data => {
                setResearces(data)
            })
    }, [])
    return (
        <div className="mt-28">
            <PageTitle title={'research'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Our Ongoing Research</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>

            <RoutingTop>
                <div className='xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-8'>
                    <h2 className="text-[#91000D] font-semibold aimsscope">Ongoing Research</h2>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 my-8">
                        {
                            researces.map((researce, index) => <ResearchBox key={researce.index} researce={researce}>

                            </ResearchBox>)
                        }
                    </div>

                    <div className="mt-[-3vh]">
                        <h2 className='font-bold text-[#91000D] hover:text-[#04205A] duration-300 cursor-pointer'>More Research</h2>
                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default ResearchPage;