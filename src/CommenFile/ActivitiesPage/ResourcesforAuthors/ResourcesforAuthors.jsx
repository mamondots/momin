import { Link } from "react-router-dom";

const ResourcesforAuthors = () => {
    return (
        <div className="w-full my-8">
            <h2 className="font-medium text-[#0D2357] aimsscope">Resources for Authors</h2>
            <div className="my-4 text-[15px] text-[#262626e2]">
                <p>Authors are the heart of the INSTITUTE’s journals.
                    ARIPD respects the contributions and comments of every author of the journals. The journals’
                    websites are designed to ensure the authors’
                    friendly and easy to use. The INSTITUTE has developed the following resources to help the
                    authors in preparing a good research paper.
                </p>

                {/* <div className="my-4 text-[#8D0012] space-y-2 cursor-pointer">

                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>Author Guidelines</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>Submission Policy</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>APA Style (6th Edition)</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>How to review a book</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>How to write a good research paper</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>Google Language Translator</Link></p>
                    <p className="hover:text-[#0D2357] duration-300"><Link to='/information/resources'>Tips to become a good researcher</Link></p>
                </div> */}
            </div>
        </div>
    );
};

export default ResourcesforAuthors;