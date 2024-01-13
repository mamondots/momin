import PageTitle from "../../Utilities/PageTitle/PageTitle";
import RoutingTop from "../../Utilities/PageTitle/RoutingTop/RoutingTop";




const Accessibility = () => {

    return (
        <div className="mt-28">
            <PageTitle title={'accessibility'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Accessibility</h2>
                <p className='py-2 text-[#ffffffb7]'>
                    At Bristol University Press and its imprint Policy Press,
                    we are committed to ensuring that all
                    our products are made available to as wide an audience as possible
                </p>
            </div>

            <RoutingTop>
                <div className='xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-8'>
                    <div>
                        <h2 className="font-bold text-[#0D2357] aimsscope">Accessibility</h2>
                        <div className="my-8 space-y-3 text-[#262626e1]">
                            <p>
                                At Bristol University Press and its imprint Policy Press,
                                we are committed to ensuring that all our products are made available to as
                                wide an audience as possible. Our research and publications are there to influence and
                                inform, so it is important to our wider mission that
                                this content is accessed by everyone regardless of age, ability or situation.
                            </p>

                            <div>
                                <h2 className="font-bold text-[#91000D] aimsscope">How do we do this?</h2>

                                <div className="my-6 space-y-3">
                                    <p>All eBooks published from April 2020 are available in both EPUB 3 and PDF
                                        options with eBooks published before this available in EPUB 2 and PDF.
                                        Ebooks published from April 2022 have access to alt text and image
                                        descriptions for the majority of
                                        visual content. eBooks published before April 2022 have no access to alt text.
                                    </p>

                                    <p>
                                        All journal articles are available in html and PDF.
                                        This means full text can easily be resized or read with
                                        assistive technology, with mark-up that allows screen readers
                                        and keyboard-only users to navigate easily and intuitively.
                                        This means users can:
                                    </p>
                                </div>

                                <div className="my-6">
                                    <p>1. change the font and increase/decrease font size</p>
                                    <p>2. reflow the text to fit any screen size</p>
                                    <p>3. adjust colour and contrast to suit their preference</p>
                                    <p>4. enable text-to-speech functionality</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold text-[#0D2357] aimsscope">Accessibility services</h2>
                        <div className="my-8 space-y-3 text-[#262626e1]">
                            <p>
                                Our full collection of books is now available on the Royal National
                                Institute of Blind People Bookshare database and also on Bookshare,
                                an accessible online library for people with dyslexia, learning disabilities,
                                visual impairments, physical disabilities, and other reading barriers.
                            </p>

                            <p>
                                If you are not able to find the title you are looking for,
                                please get in touch directly and we will ensure it is available.
                            </p>
                        </div>
                    </div>


                    <div>
                        <h2 className="font-bold text-[#0D2357] aimsscope">Digital rights protection</h2>
                        <div className="my-8 space-y-3 text-[#262626e1]">
                            <p>
                                All our Bristol University Press and Policy Press content is protected by Digital
                                Rights Management (DRM) software, and the rationale and accessibility implications
                                are outlined in our terms of use.
                                This does not allow widescale copying or sharing of eBook content by an individual.
                            </p>

                            <p>
                                We would ask you to respect this policy as it is part of our commitment to protect
                                our authors’ intellectual property rights.  If you do have an enquiry
                                about using the content in an alternative way, then they we are open to discussions
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold text-[#0D2357] aimsscope">Feedback</h2>
                        <div className="my-8 space-y-3 text-[#262626e1]">
                            <p>
                                We would value your feedback to help us identify issues,
                                successes and inform our future decision-making. Please send this,
                                or any queries, to Sales and Marketing Director,
                                Jo Greig at jo.greig@bristol.ac.uk or call on +44 (0)117 3945965.
                            </p>

                            <p>
                                When you visit the site your computer is issued with a small file (a cookie).
                                A cookie is a piece of information sent via your Internet browser and saved on your
                                local hard drive. Currently we only issue session cookies, which are deleted when the
                                browser window is closed.
                                Cookies do no harm in themselves. Cookies allow you to use the shopping basket facility.
                            </p>

                            <p>
                                In any such communication with you we
                                will always give you the opportunity to opt out should you wish to
                            </p>
                        </div>
                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default Accessibility;