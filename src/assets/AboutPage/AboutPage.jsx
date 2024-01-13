import PageTitle from "../../Utilities/PageTitle/PageTitle";
import aboutListes from '../../../public/about.json'
import RoutingTop from "../../Utilities/PageTitle/RoutingTop/RoutingTop";

const AboutPage = () => {

    return (
        <div className="mt-28">
            <PageTitle title={'about'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>About us</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>


            <RoutingTop>
                <div className='my-8 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-6'>
                    <div>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">Who We Are?</h2>

                        <div className='my-8 space-y-3'>
                            <p>
                                The American Association of International Researchers (AAIR)
                                was established in 2010 by a small group interested in research and
                                publication. Today, the AAIR has grown to be one of the largest international
                                associations in the world, with over 2000 global members who do research,
                                teach and read in the fields of applied and basic disciplines.
                            </p>

                            <p>
                                As the leading organization for researchers,
                                AAIR is the trusted go-to resource for researchers and academics.
                                We are counted on as the most credible intellectual resource where our
                                members can stay relevant with knowledge, training and tools to enhance
                                lifelong learning and obtain valuable information and connections throughout
                                the world
                            </p>

                            <p>
                                The AAIR is well positioned to provide a unique set of services to its
                                members and to
                                promote the vitality, visibility, and diversity of the discipline.
                            </p>

                            <p>
                                No other organization provides more ways for independent researchers and academics to
                                connect with the people and resources they need to be successful.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">WEG at a Glance</h2>
                        <p className='text-[#91000D] pt-6'>The American Association of International Researchers (AAIR) is:</p>
                        <div className='space-y-2 py-4'>
                            <p className='flex items-baseline space-x-2'><span>1:</span><span>a non-profit international membership association based in USA.</span></p>
                            <p className='flex items-baseline space-x-2'><span>2:</span><span>dedicated to advancing research at national and international level.</span></p>
                            <p className='flex items-baseline space-x-2'><span>3:</span><span>an association of over 2000 global members</span></p>
                            <p className='flex items-baseline space-x-2'><span>4:</span><span>home to more than 55 special interest sections with more than 2000 members</span></p>
                            <p className='flex items-baseline space-x-2'><span>5:</span><span>host of cross-cultural research.</span></p>
                            <p className='flex items-baseline space-x-2'><span>6:</span><span>publisher of 15 professional international journals.</span></p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">History of the Institute</h2>

                        <div className='my-8 space-y-3'>
                            <p>
                                Founded in June 2011, the ARIPD serves as a focal point for academicians,
                                professionals, graduate and undergraduate students, fellows, and associates
                                pursuing research throughout the world. Initially ARIPD’s activities were based in Bangladesh.
                                Later its scope has been broadened to the world at large through its U.S. International Center.
                            </p>

                            <p>
                                The Institute works with policymakers, scholars, and public interest groups around the World to design,
                                execute, and disseminate research that illuminates economics and social policy issues affecting the
                                communities of the world. ARIPD seeks to build a network of individuals and organizations that
                                conduct and use policy research. As an independent, non-profit, research organization,
                                ARIPD also works in affiliation with American Association of International Researchers (AAIR).
                            </p>

                            <p>
                                ARIPD's work is supported by foundation grants, government grants and contracts,
                                donations from individuals, and contributions from organizations. Members and affiliates of ARIPD's
                                Information Network receive reports and information on a regular basis. ARIPD is a 501(c) (3)
                                tax-exempt organization.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">Key Activities of the Institute</h2>
                        <p className='text-[#91000D] py-8'>The core activities of ARIPD include but not limited to the following:</p>
                        <div>
                            <div className='space-y-2'>
                                {
                                    aboutListes.map(aboutListe => <div key={aboutListe.id}>
                                        <p className='flex items-baseline space-x-2'><span>{aboutListe.id}:</span><span>{aboutListe.text}</span></p>
                                    </div>)
                                }
                            </div>
                            <p className='my-3 text-[#072159]'>
                                The Institute supports and patronizes the functions of AAIR.
                                AAIR has already more than 2000 members from more than 150 countries.
                                AAIR receives 10 membership applications daily on an average from the academicians and
                                researchers around the world. The membership is completely free of charge.
                                The Institute has two diversified global research centers formed to unleash
                                the core research in specific field: Center for Global Academic Research & Center for Policy Analysis.
                            </p>
                        </div>
                    </div>

                    <div className='my-2'>
                        <h2 className="text-xl font-bold text-[#072159] aimsscope">Vision, Mission & Values</h2>

                        <div className='my-8 space-y-2'>
                            <p>
                                The ARIPD’s vision is to provide international leadership in generating and disseminating the
                                latest research findings through a comprehensive blending of academic and institutional research.
                                It promotes excellence and innovation in
                                interdisciplinary scientific research, public policy initiatives, and education of the public.
                            </p>

                            <p>
                                The Institute's mission is to support and advance the research activities around the world.
                            </p>

                            <p>
                                The core values of ARIPD include commitment, innovation,
                                flexibility, diversity, timeliness, zero discrimination,
                                quality in every step and global thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default AboutPage;