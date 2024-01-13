import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";



const MemberShipPage = () => {

    return (
        <div className="mt-28">
            <PageTitle title={'membership'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>About Membership</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>


            <RoutingTop>
                <div className='my-8 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6'>
                    <div>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">Who is a member?</h2>

                        <div className='mt-8 space-y-3'>
                            <p className="text-[#91000D]">
                                AAIR recognizes a person as its member only when
                                he/she satisfies the ASSOCIATION’S basic criteria.
                            </p>

                            <div className='space-y-2'>
                                <p className='flex items-baseline space-x-2'><span>1:</span><span>The interested person/membership candidate is directly or indirectly related with professional or academic research</span></p>
                                <p className='flex items-baseline space-x-2'><span>2:</span><span>She/he has minimum academic capability to be involved with extensive research.</span></p>
                                <p className='flex items-baseline space-x-2'><span>3:</span><span>She/he must have the mentality to serve the research journals run by the association as an editor or reviewer (if asked).</span></p>
                                <p className='flex items-baseline space-x-2'><span>4:</span><span>She/he must abide by the ASSOCIATION’S code of conduct.</span></p>
                                <p className='flex items-baseline space-x-2'><span>5:</span><span>She/he has properly applied for AAIR Membership with all necessary documents and she/he has got the membership approval from the authority of AAIR with a valid membership ID.</span></p>
                            </div>

                        </div>

                        <div className='space-y-3 my-4'>
                            <h2 className="text-xl font-bold text-[#072159] aimsscope">Membership Benefits</h2>
                            <p className="py-4">
                                As an AAIR member, you join more than 2000 of your colleagues who embrace the value of an AAIR membership.
                                Whether you are an established researcher, academician or an emerging scholar in the field, you will
                                find it a rewarding experience with far-reaching impact on your career.
                                It’s a place where you can make important contributions to the distinction of our profession.
                            </p>
                            <p className="text-[#91000D]">
                                AAIR membership enables you to receive special privileges including:
                            </p>
                            <div className='space-y-2'>
                                <p className='flex items-baseline space-x-2'><span>1:</span><span>Online access to all the journals of AAIR</span></p>
                                <p className='flex items-baseline space-x-2'><span>2:</span><span>Receive any of the AAIR Journals in print for a small fee.</span></p>
                                <p className='flex items-baseline space-x-2'><span>3:</span><span>Discounts on publication fees for the AAIR Journals.</span></p>
                                <p className='flex items-baseline space-x-2'><span>4:</span><span>Submit papers for quick review and publication.</span></p>
                                <p className='flex items-baseline space-x-2'><span>5:</span><span>Receive electronic announcements of upcoming events, Call for Papers, and new member benefits.</span></p>
                                <p className='flex items-baseline space-x-2'><span>6:</span><span>Get the MEMBERSHIP certificate.</span></p>
                                <p className='flex items-baseline space-x-2'><span>7:</span><span>Opportunity to be involved with cross-cultural research team</span></p>
                                <p className='flex items-baseline space-x-2'><span>8:</span><span>Priority in case of ARIPD research grant.</span></p>
                                <p className='flex items-baseline space-x-2'><span>9:</span><span>Opportunity to be involved with AAIR/ARIPD journals as a reviewer or editor.</span></p>
                                <p className='flex items-baseline space-x-2'><span>10:</span><span>Complimentary listing in the AAIR Directory of Members</span></p>
                            </div>

                        </div>


                        <div className='space-y-3 my-4'>
                            <h2 className="text-xl font-bold text-[#072159] aimsscope">Who can be a member?</h2>
                            <p className="text-[#91000D] pt-4">
                                Membership is open for:
                            </p>
                            <div className='space-y-2'>
                                <p className='flex items-baseline space-x-2'><span>1:</span><span>College and university faculty</span></p>
                                <p className='flex items-baseline space-x-2'><span>2:</span><span>Independent researchers</span></p>
                                <p className='flex items-baseline space-x-2'><span>3:</span><span>PhD candidates</span></p>
                                <p className='flex items-baseline space-x-2'><span>4:</span><span>Practitioners</span></p>
                                <p className='flex items-baseline space-x-2'><span>5:</span><span>Employees of government, business, or non-profit organizations.</span></p>

                            </div>

                        </div>


                        <div className='space-y-3 my-4'>
                            <h2 className="text-xl font-bold text-[#072159] aimsscope">Membership Application Procedures</h2>
                            <p className="pt-4">
                                Being a member of the AAIR offers comprehensive, timely information and perspectives that you won’t
                                find anywhere else, along with the resources, tools and connections to help your career flourish in
                                the research community.
                                The interested person can apply for AAIR membership at any time during the year.
                            </p>
                            <p className="pt-4 text-[#072159]">
                                Please send the filled up application form, your short biography and a
                                recent photograph to the executive director at ex.<span className="text-[#91000D] cursor-pointer">director@aripd.org</span>
                            </p>
                        </div>

                        <div>
                            <p className="text-[#91000D] cursor-pointer">Download the Membership Application Form</p>
                        </div>

                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default MemberShipPage;