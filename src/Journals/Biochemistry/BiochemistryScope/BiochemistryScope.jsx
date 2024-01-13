import BiochemistryArticles from "../../../Articles/BiochemistryArticles/BiochemistryArticles";


const BiochemistryScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    General Chemistry, 
                    Applied Chemistry, 
                    Organic and Biochemistry, 
                    Analytical Chemistry, 
                    Medicinal Chemistry, 
                    Physical Chemistry, 
                    Biochemical Methods, 
                    Scientific Information, 
                    Molecular Spectroscopy, 
                    Chemical Separation Methods, 
                    Inorganic Chemistry, 
                    Quantum Mechanics, 
                    Thermodynamics, 
                    Chemical Kinetics, 
                    Dynamics, 
                    Computational Chemistry and Biology, 
                    Nanoscale Materials, 
                    Supramolecular Chemistry, 
                    Organic Synthesis and Structure, 
                    Polymer Chemistry, 
                    Chemical Biology, 
                    High-Throughput Methods in Chemistry, 
                    Wave Mechanics and Spectroscopy, 
                    Statistical Thermodynamics, 
                    Scientific Methods and Ethics, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <BiochemistryArticles></BiochemistryArticles>
                </div>
            </div>
        </div>
    );
};

export default BiochemistryScope;