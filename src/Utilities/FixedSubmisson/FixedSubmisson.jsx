import Submission from "../../CommenFile/Submission/Submission";
import PageTitle from "../PageTitle/PageTitle";

const FixedSubmisson = () => {
    return (
        <div className='mt-28'>
            <PageTitle title={'about'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Submisson</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>

            <div className="xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-8">
                 <Submission></Submission>
            </div>
        </div>
    );
};

export default FixedSubmisson;