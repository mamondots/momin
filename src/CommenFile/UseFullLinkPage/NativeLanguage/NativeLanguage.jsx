import { Link } from 'react-router-dom';
import wordFile from '../../../assets/form/ijat-Reviewer-Application-Form.pdf'
const NativeLanguage = () => {
    return (
        <div className="my-8">
            <h2 className="font-medium text-[#0D2357]">Publish in Your Native Language</h2>

            <div className="my-4 text-[#262626e2]">
                <div className="text-[15px]">
                    <p>
                        American Research Institute for Policy Development invites the scholars and academicians
                        to publish the papers in their preferred languages. At present there are two
                        journals where the researchers, academicians and scholars publish the papers
                        in different languages (See below).
                    </p>
                    <div className="my-2 space-y-1 text-[#8D0012]">
                        <p className="hover:text-[#0D2357] duration-300 cursor-pointer"><Link to='/jflcc'>Journal of Foreign Languages, Cultures & Civilizations</Link></p>
                        <p className="hover:text-[#0D2357] duration-300 cursor-pointer"><Link to='/imjcr'>International Multilingual Journal of Contemporary Research</Link></p>
                    </div>

                    <p>
                        The contributors are requested to recommend a reviewer of the respective language at the time of submitting the manuscript. However,
                        this is not applicable if the paper is written in English.
                    </p>
                </div>

                <div className="my-4">
                    <h2 className="font-medium text-[#0D2357] aimsscope">Recommend a Special Issue</h2>
                    <div className="my-4">
                        <p className='text-[15px]'>
                            The researchers, PhD candidates and/or academicians can propose a special issue on a specific topic
                            to publish in the journal. The enthusiastic team will seek the papers from the interested
                            contributors and will arrange the schedule for publication. The executive editor will
                            nominate a panel of editors for the special issue. The number of papers for the special
                            issue must not be less than 10. The other terms and conditions of the publisher and the
                            editorial board remain same.
                        </p>
                    </div>
                </div>

                <div className="my-4">
                    <h2 className="font-medium text-[#0D2357] aimsscope">Publish the Conference Proceedings</h2>
                    <div className="my-4">
                        <p className='text-[15px]'>
                            The journal publishes the conference proceedings as a special issue.
                            The interested convener or management team is highly encouraged to contact with the executive editor.
                            The executive editor will nominate a panel of editors for the special issue. The number of papers must
                            not be less than 10.
                            The other terms and conditions of the publisher and the editorial board remain same.
                        </p>
                    </div>
                </div>

                <div className="my-4">
                    <h2 className=" font-medium text-[#0D2357] aimsscope">Recruitment of Reviewers</h2>
                    <div className="my-4">
                        <p className='text-[15px]'>
                            The self-enthusiastic and qualified persons are highly encouraged to join the 'Panel of Reviewers'
                            of the journal. The minimum qualification is Doctorate or Assistant Professor. The quick and double
                            blind review process, rich editorial board, zero tolerance for plagiarism and high respect for
                            publication ethics, a strong commitment for scheduled
                            publication are the key features of the journal. View the complete list of journals by subject.
                        </p>

                        <div className='flex items-center space-x-2 py-2 text-[15px]'>
                        <p>Download the: </p>
                        <a href={wordFile} target="download" className='text-[#91000D]'>Application form for Reviewer</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NativeLanguage;