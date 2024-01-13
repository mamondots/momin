
import LifeArticles from '../../../Articles/LifeArticles/LifeArticles';
import LifeDetails from '../LifeDetails/LifeDetails';
import './LifeHome.css'
const LifeHome = () => {
    return (
        <div className='w-full'>

            <LifeDetails></LifeDetails>

            <div className='LifeHome_bg text-white px-4 py-4 mt-8'>
                <h2 className='font-bold text-lg py-2'>Journal of Agriculture & Life Sciences</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4978 (Print Version) / 2372-4986 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijat</p>
                </div>
            </div>

            <div className='py-6 '>
                <p className='text-[15px]'>
                    <span className='font-medium text-[#91000D]'>Journal of Agriculture & Life Sciences</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JALS is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts and innovation in the fields of agriculture and biological sciences. JALS aims to promote interdisciplinary studies in agriculture and life science and thus become the leading international journal in agriculture and life sciences in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>The journal publishes research papers in the all the fields of agriculture and life sciences stated below:</span>
                </p>

                <p className='text-[15px]'>Agriculture: Basic agriculture, fruit production, animal science, soil science, landscaping, horticulture, poultry science, plant pathology, farm management, gardening, natural resources power, earth sciences, geography, environmental sciences, ecosystems, agro industry, agricultural economics environmental policy, natural history general occupational safety and health, sustainable environmental, water resource analysis, ecology, climate change, waste management, and so on.</p>
                <p className='py-4'>Life Sciences: Affective neuroscience, Anatomy, Astrobiology, Biochemistry, Biocomputers, Biocontrol, Biodynamics, Bioinformatics, Biology, Biomaterials, Biomechanics, Biomedical science, Biomedicine, Biomonitoring, Biophysics. Biopolymers, Biotechnology, Botany, Cell biology, Cognitive neuroscience, Computational neuroscience, Conservation biology, Developmental biology, Ecology, Environmental science, Ethology, Evolutionary biology, Evolutionary genetics, Food science, Genetics, Genomics, Health Sciences, Immunogenetics, Immunology, Immunotherapy, Kinesiology, Marine biology, Medical devices, Medical imaging, Medical Social Work, Microbiology, Molecular biology, Neuroethology, Neuroscience, Oncology, Optogenetics, Optometry, Parasitology, Pathology, Pharmacogenomics, Pharmaceutical sciences, Pharmacology, Physiology, Population dynamics, Proteomics, Psychiatric social work, Psychology, Sports science, Structural biology, Systems biology, Zoology and so on.</p>
                <div>

                    <div className='my-2'>
                        <h2 className='font-medium text-[#91000D] py-2'>E-Publication First<sup>TM</sup></h2>
                        <p className='text-[15px]'>
                            E-Publication First<sup>TM</sup> is a feature offered through our journal platform. It allows PDF
                            version of manuscripts that have been peer reviewed and accepted, to be hosted online prior to their
                            inclusion in a final printed journal. Readers can freely access or cite the article. The accepted papers
                            are published online within one week after the completion of all necessary publishing steps.
                        </p>
                    </div>

                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p className='text-[15px]'>
                        Each paper published in <span className='font-semibold'>Journal of Agriculture & Life Sciences</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/' target='_blank'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p className='text-[15px]'>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                    <div>
                        <LifeArticles></LifeArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeHome;