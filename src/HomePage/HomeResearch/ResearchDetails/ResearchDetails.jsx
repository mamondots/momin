import PageTitle from "../../../Utilities/PageTitle/PageTitle";
import RoutingTop from "../../../Utilities/PageTitle/RoutingTop/RoutingTop";
import climet from '../../../assets/img/global-warming.jpg'
const ResearchDetails = () => {

    return (
        <div className="mt-28">
            <PageTitle title={'research'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Climate Change & Global Warming</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>

            <RoutingTop>
                <div className='xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-8'>
                    <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-12 gap-6">

                        <div className="border lg:w-1/3 p-4 rounded">
                            <img className="w-full rounded" src={climet} alt="" />
                        </div>

                        <div className="w-full">
                            <h2 className="text-base font-bold text-[#072159]">Climate Change & Global Warming</h2>
                            <div className="py-2">
                                <h2 className="font-bold text-sm text-[#91000D]">Research Topic:</h2>
                                <p className="text-[#072159]">Climate Change and Global Warming: Causes, Consequences & Consensus</p>
                            </div>
                            <div>
                                <h2 className="text-base font-bold text-[#072159]">Overview:</h2>
                                <div className="py-2 space-y-2 text-[#262626d4]">
                                    <p>The climate is changing. The earth is warming up, and there is now overwhelming scientific
                                        consensus that it is happening, and human-induced. With global warming on the increase and
                                        species and their habitats on the decrease, chances for ecosystems to adapt naturally are
                                        diminishing.
                                    </p>

                                    <p>
                                        Many are agreed that climate change may be one of the greatest threats facing the planet.
                                        Recent years show increasing temperatures in various regions, and/or increasing extremities
                                        in weather patterns.
                                    </p>

                                    <p>
                                        This research project looks at what causes climate change,
                                        what the impacts are and where scientific consensus currently is.
                                    </p>
                                </div>
                            </div>

                            <div className="text-sm space-y-1 py-2">
                                <p className="font-bold text-[#072159]">Probable Date of Completion : <span className="text-[#91000D]">December 2023</span></p>
                                <p className="font-bold text-[#072159]">Sponsored By : <span className="text-[#91000D]">Center for Policy Analysis</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default ResearchDetails;