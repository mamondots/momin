
import LanguageArticles from "../../../Articles/LanguageArticles/LanguageArticles";

const LanguageScope = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p>
                    Fundamentals of Languages,
                    Narrative and Memory,
                    Thinking and Writing across the Curriculum,
                    Literary Research Methods,
                    Literary Discourse,
                    British Literature,
                    American Literature,
                    Professional Writing,
                    Conflict and Community,
                    Home and Away: Epics and Utopias,
                    Uncovering Fairytales, Myth, Folktales, and Ghost Stories,
                    Studies in Trauma Literature,
                    Creative Writing,
                    Critical Writing,
                    African Literature,
                    Literature of American Diversity,
                    American Fiction,
                    The Epic Tradition,
                    Biographic Arts,
                    Women in Literature and Psychology,
                    Film and Literature,
                    Romanticism,
                    Victorian Literature,
                    World Literature,
                    Class and Culture in Literature and Film,
                    Rebels in Literature and Music,
                    Novel,
                    Women's Literature,
                    Short Story,
                    Poetry,
                    Drama,
                    The Age of Chaucer,
                    The Age of Shakespeare,
                    Literature Theory and Practice,
                    History of the English Language,
                    Problems in the Study of Gender and Sexuality,
                    Hamlet and Critical Methods,
                    Psychoanalytic Approaches to Literature,
                    India in English,
                    Decolonizing Drama and Performance in Africa,
                    Beckett,
                    Assemblage,
                    Disability Studies,
                    Afro-American Literature,
                    International Cinema,
                    Asian Languages and Literature,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <LanguageArticles></LanguageArticles>
                </div>
            </div>
        </div>
    );
};

export default LanguageScope;