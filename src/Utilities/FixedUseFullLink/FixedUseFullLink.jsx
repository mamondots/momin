import UseFullLinkPage from "../../CommenFile/UseFullLinkPage/UseFullLinkPage";
import PageTitle from "../PageTitle/PageTitle";


const FixedUseFullLink = () => {
    return (
        <div className='mt-28'>
            <PageTitle title={'Use_FullLink'}></PageTitle>
            <div className="reaearch_banner xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 py-12">
                <h2 className='text-base font-bold text-[#ffffff]'>Resources</h2>
                <p className='py-2 text-[#ffffffb7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum vel assumenda quod, <br></br>quos aliquam distinctio dicta sequi exercitationem
                    natus non error expedita<br></br> ab fugit quasi nemo asperiores. Architecto,
                    porro commodi!
                </p>
            </div>

            <div className="xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12 my-8">
                <UseFullLinkPage></UseFullLinkPage>
            </div>
        </div>
    );
};

export default FixedUseFullLink;