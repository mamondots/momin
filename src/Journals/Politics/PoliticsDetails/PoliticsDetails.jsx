import img from '../../../assets/img/PoliticsnGovernance.png'

const PoliticsDetails = () => {
    return (
        <div className="">
            <div className="border-2 rounded p-8">
                <div className='flex flex-wrap lg:gap-12 gap-6'>
                    <div className='w-1/4'>
                        <img src={img} alt="" />
                    </div>

                    <div className='text-[15px]'>
                        <h2 className='text-lg font-medium text-[#072159]'>Journal of Power, Politics & Governance</h2>
                        <div className='py-2'>
                            <p className='font-medium text-[#91000cae]'>Editor-in-Chief:</p>
                            <p>Dr. Jackson de Carvalho, Prairie View A&M University, USA.</p>
                        </div>

                        <div className='py-2 space-y-2'>
                            <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                                <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                <p>2372-4919 (Print Version)</p>
                            </div>

                            <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                                <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                <p>2372-4927 (Electronic Version)</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                            <p className='font-medium text-[#91000cae]'>Frequency:</p>
                            <p>Semi-annually (2 issues per year)</p>
                        </div>

                        <div className='flex items-center space-x-2 py-2'>
                            <p className='font-medium text-[#91000cae]'>Nature:</p>
                            <p>Print and Online</p>
                        </div>

                        <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                            <p className='font-medium text-[#91000cae]'>Submission E-mail:</p>
                            <p>editor@aripd.net</p>
                        </div>

                        <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1 py-2'>
                            <p className='font-medium text-[#91000cae]'>Language of Publication:</p>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliticsDetails;