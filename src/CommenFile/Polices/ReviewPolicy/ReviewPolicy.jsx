import { Link } from "react-router-dom";

const ReviewPolicy = () => {
    return (
        
            <div className="my-8">
                <h2 className="font-medium text-[#0D2357]">Review Policy</h2>
                <p className="my-4 text-[15px] text-[#262626e2]">
                    The journal follows double blind peer review policy. The paper is sent to two reviewers
                    (the experts in respective field) to review the paper in the light of journal's
                    guidelines and features of a quality research paper. For papers which require changes,
                    the same reviewers will be used to ensure that the quality of the revised paper is acceptable.
                </p>

                <h2 className="font-medium text-[#0D2357] aimsscope">Submission Policy</h2>
               <Link to='/Ijatnet/subscription'>
               <p className="my-4 text-[15px] text-[#8D0012] cursor-pointer hover:text-[#0D2357] duration-300">View the Submission Policy</p>
               </Link>
        </div>
    );
};

export default ReviewPolicy;