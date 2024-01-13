import ArtHistoryArticle from "../../../Articles/ArtHistoryArticle/ArtHistoryArticle";
import IjatArticles from "../../../Articles/IjatArticles/IjatArticles";

const ArtHistoryScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Art History Methodologies, African Art and Culture, Architecture across Cultures,
                    Islamic Art and Architecture, 
                    American Art to 1940, 
                    Buddhist Art, 
                    Japanese Art and Culture, 
                    Chinese Art and Culture, 
                    Printmaking: The First Media Revolution, 
                    History of Photography, 
                    Modern Art, 
                    Medieval Art, 
                    Chinese Painting, 
                    Cross Cultural Psychology in Prague, 
                    Gender and Genre in the Floating World, 
                    Women in Art, 
                    Italian Renaissance Art, 
                    Rembrandt, Vermeer and Netherlandish Art, 
                    Art Since 1945,
                    Modern Architecture, 
                    English Gothic and Gothic-Revival Art and Architecture,
                    Planning Utopia,
                    The Art of Death in the Middle Ages,
                    Legacies of the Avant-Garde,
                    Rome,
                    Japanese Theater,
                    Arts of the Chinese Scholar's Studio,
                    Theories of Postmodernism,
                    English Art and Architecture on Site,
                    Observational Drawing,
                    Sculpture,
                    The Digital Landscape,
                    Experimental Photography,
                    Life Drawing,
                    Ceramics,
                    The Figure in Clay,
                    Photography,
                    Film and Digital Photography,
                    Metalsmithing,
                    Painting,
                    Water Based Painting,
                    Printmaking,
                    Paper Arts,
                    Contemporary Arts,
                    Woodworking.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <ArtHistoryArticle></ArtHistoryArticle>
                </div>
            </div>
        </div>
    );
};

export default ArtHistoryScope;