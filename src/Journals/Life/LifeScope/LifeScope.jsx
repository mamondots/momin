
import LifeArticles from "../../../Articles/LifeArticles/LifeArticles";

const LifeScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="py-4 gap-24">
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Agriculture & Life Sciences</span>  is an open access, peer-reviewed, and refereed journal published by The Brooklyn Research and Publishing Institute. The main objective of JALS is to provide a platform for the international scholars, academicians and researchers to share the contemporary thoughts and innovation in the fields of agriculture and biological sciences. JALS aims to promote interdisciplinary studies in agriculture and life science and thus become the leading international journal in agriculture and life sciences in the world.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>The journal publishes research papers in the all the fields of agriculture and life sciences stated below:</span> 
                </p>

                <p>Agriculture: Basic agriculture, fruit production, animal science, soil science, landscaping, horticulture, poultry science, plant pathology, farm management, gardening, natural resources power, earth sciences, geography, environmental sciences, ecosystems, agro industry, agricultural economics environmental policy, natural history general occupational safety and health, sustainable environmental, water resource analysis, ecology, climate change, waste management, and so on.</p>
                <p className='py-4'>Life Sciences: Affective neuroscience, Anatomy, Astrobiology, Biochemistry, Biocomputers, Biocontrol, Biodynamics, Bioinformatics, Biology, Biomaterials, Biomechanics, Biomedical science, Biomedicine, Biomonitoring, Biophysics. Biopolymers, Biotechnology, Botany, Cell biology, Cognitive neuroscience, Computational neuroscience, Conservation biology, Developmental biology, Ecology, Environmental science, Ethology, Evolutionary biology, Evolutionary genetics, Food science, Genetics, Genomics, Health Sciences, Immunogenetics, Immunology, Immunotherapy, Kinesiology, Marine biology, Medical devices, Medical imaging, Medical Social Work, Microbiology, Molecular biology, Neuroethology, Neuroscience, Oncology, Optogenetics, Optometry, Parasitology, Pathology, Pharmacogenomics, Pharmaceutical sciences, Pharmacology, Physiology, Population dynamics, Proteomics, Psychiatric social work, Psychology, Sports science, Structural biology, Systems biology, Zoology and so on.</p>
                
                <p className='py-4 text-[#91000D]'>The journal is published in both print and online.</p>
                <p>JALS publishes original papers, review papers, conceptual framework, analytical and simulation models, case studies, empirical research, technical notes, and book reviews. Special Issues devoted to important topics agriculture and life sciences will occasionally be published.</p>
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                         <LifeArticles></LifeArticles>
                    </div>
                </div>
        </div>
    );
};

export default LifeScope;