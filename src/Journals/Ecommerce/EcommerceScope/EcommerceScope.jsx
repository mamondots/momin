import EcommerceArticles from "../../../Articles/EcommerceArticles/EcommerceArticles";


const EcommerceScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Basic principles of Information Technology,
                    Hardware and software components,
                    Database technology,
                    Telecommunications and networking,
                    E-commerce and e-business,
                    Enterprise Resource Planning,
                    Decision Support Systems,
                    Artificial Intelligence and Expert Systems,
                    Systems development and implementation,
                    The ethical and societal issues involved in IT,
                    Business Data Communications and Information Security,
                    Business Information Systems Analysis and Design,
                    Current Issues in the Management of Information Systems,
                    Information Audit, Control, and Risk Management,
                    Web Development and Applications,
                    Visual Basic Programming,
                    JAVA & C++ PROGRAMMING,
                    Electronic Business Communication Networks,
                    Interactive Marketing,
                    Accounting for Electronic Business,
                    Electronic Business and Entrepreneurship,
                    Business Applications of Communication Networks,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <EcommerceArticles></EcommerceArticles>
                </div>
            </div>
        </div>
    );
};

export default EcommerceScope;