import LibraryArticles from "../../../Articles/LibraryArticles/LibraryArticles";

const LibraryScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
               <p>
                
               </p>
            </div>

            <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                         <LibraryArticles></LibraryArticles>
                    </div>
                </div>
        </div>
    );
};

export default LibraryScope;