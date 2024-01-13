import { Link } from "react-router-dom";

const Submission = () => {
    return (
        <div className="">
            <h2 className="font-bold text-[#91000D]">Submission</h2>

            <div>
                <div>
                    <h2 className="font-medium text-[#0A2258] py-2">How to submit the paper</h2>
                    <p className="text-[15px]">
                        The author should submit the paper via e-mail to the executive editor at <span className="text-[#91000D] hover:text-[#7497e8] duration-300 cursor-pointer">editor@aripd.net</span> or you can send your paper by this 
                        <Link to='/submit'><span className="font-medium text-[#91000D] cursor-pointer px-2">Submit</span></Link>
                    </p>
                    <p className="py-2 text-[15px]">
                        Mention the name of the journal in which you are interested to publish
                        your paper as ARIPD follows central
                        submission policy for all journals i.e. same e-mail <span className="text-[#91000D] hover:text-[#0A2258] duration-300 cursor-pointer">(editor@aripd.net)</span> for submission in any ARIPD journal.
                    </p>
                </div>

                <div>
                    <h2 className="font-medium text-[#0A2258] py-2">Manuscript Preparation Guidelines</h2>
                    <p className="text-[15px]">
                        The authors(s) must follow the <span className="text-[#91000D] hover:text-[#0A2258] duration-300 cursor-pointer"><Link to='/information/resources'>Manuscript Preparation Guidelines</Link></span> in preparing the manuscript before submission.
                    </p>
                </div>

                <div>
                    <h2 className="font-medium text-[#0A2258]  py-2">Review Policy</h2>
                    <p className="text-[15px]">
                        The journal follows double blind peer review policy.
                        The paper is sent to two reviewers (the experts in respective field)
                        to review the paper in the light of journal's guidelines and features of a
                        quality research paper. For papers which require changes, the same reviewers
                        will be used to ensure that the quality of the revised paper is acceptable.
                    </p>
                </div>

                <div>
                    <h2 className="font-medium text-[#0A2258]  py-2">Review and Publication Process</h2>
                    <p className="text-[#91000D] text-[15px]">The journal follows a systematic review and publication policy.</p>

                    <div className="space-y-2 my-2 text-[15px]">
                        <div className="flex items-center space-x-1">
                            <p className="text-[#91000D] font-semibold">Step-1: </p>
                            <p>The submitted manuscript is acknowledged within 24 hours upon receipt.</p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-2: </span>
                                The manuscript/paper is sent to two
                                reviewers (paper without the name and affiliations of the author(s).
                                The review process takes maximum two weeks.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold">Step-3: </span>
                                The review reports are collected from the reviewers and the executive editor will
                                send the review reports to the authors including all terms
                                and conditions of the publication.
                            </p>
                        </div>

                        <div className="">
                            <p> <span className="text-[#91000D] font-semibold px-1">Step-4:</span>
                                If the paper is accepted, the executive editor will ask the author/corresponding author
                                to pay the publication fee of the journal within the specified time. If the paper is accepted
                                subject to modification, the executive editor will send the review reports to the
                                author/corresponding author including a formal request to modify the paper by seven
                                days as per the suggestions of the reviewers. The executive author will send the modified
                                paper to the same reviewers of the said paper to justify the modifications. If the paper is
                                again returned by the reviewers, the paper is said to be finally rejected. The journal will
                                not proceed with the said paper. However, in case of very minor changes,
                                the editorial board may consider the paper for further modifications.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-5: </span>
                                The accepted paper is processed for publication (soft copy) upon the successful
                                completion of the journal’s terms and conditions (It takes maximum three days
                                after receiving the publication fee). The author may ask for acceptance letter
                                after making the payment of publication fee. The acceptance letter is issued within
                                two days of publication fee receipt.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-6: </span>
                                Proof Reading. The executive editor will send the processed paper
                                for publication
                                (MS Word) to the author/corresponding author for proof reading
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-7: </span>
                                The paper is published online first. The executive editor will
                                notify the author/corresponding author about online publication with
                                necessary download link. The author/corresponding author may request
                                for any correction in published paper (in case of extremely important changes)
                                within three days of online publication.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-8: </span>
                                The journal is published in print within one week of online publication.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-9: </span>
                                The executive editor will ask the authors of the published papers to send their correct and
                                complete mailing address (with proper ZIP Code and postal code)
                                by three days after print publication.
                            </p>
                        </div>

                        <div className="">
                            <p>
                                <span className="text-[#91000D] font-semibold px-1">Step-10: </span>
                                The executive editor will send the hard copy of the
                                journal to the authors within
                                one month after print publication.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-[#91000D] font-semibold py-2">Publication Fee</h2>
                            <p>
                                The publication processing fee for a research paper is 300 USD.
                                The author/corresponding author will get one print copy. However,
                                the author may order for additional print copy. The charge for each
                                additional print copy is 50 USD. The publication fee is charged only
                                for accepted paper. The author/corresponding author has to pay the publication
                                as per the method determined by the executive editor. The author will get official
                                receipt of publication fee with proper seal and signature.
                            </p>
                        </div>


                        <div>
                            <h2 className="text-[#91000D] font-semibold py-2">Copyright</h2>
                            <p>
                                Copyrights for articles published in the journal are retained by the authors,
                                with first publication rights granted to the journal. The journal/publisher
                                is not responsible for subsequent uses of the work. It is the author's
                                responsibility to bring an infringement action if so desired by the author.
                            </p>
                        </div>


                        <div>
                            <h2 className="text-[#91000D] font-semibold py-2">Plagiarism Policy</h2>
                            <p>
                                The editorial board is very strict regarding plagiarism.
                                The journal believes that taking the ideas and work of others
                                without giving them credit is unfair and dishonest.
                                Copying even one sentence from someone else's manuscript,
                                or even one of your own that has previously been published,
                                without proper citation is considered plagiarism-use your own words instead.
                                The editorial board retains the absolute authority to reject the review process of a
                                submitted manuscript if it subject to minor or major plagiarism and even may
                                cancel the publication upon the complaint of victim(s) of plagiarism.
                            </p>
                        </div>


                    </div>
                </div>

            </div>
        </div>

    );
};

export default Submission;