import CultureArticles from "../../../Articles/CultureArticles/CultureArticles";

const CultureScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p className="text-[15px]">
                    Qur'anic Studies,
                    Hadith,
                    Sufi Literature,
                    Islamic Philosophy,
                    Islamic Law,
                    Persian Poetry,
                    Early Islamic Historiography,
                    Islamic History and Society,
                    Islamic Thought and Literature,
                    Islamic Origins,
                    Shi'ism: History, Memory, Politics,
                    Islamic Poetry,
                    Christians, Muslims, and Jews in Late Medieval Spain,
                    Christian-Muslim Relations: Past, Present & Future,
                    Women and Islam,
                    Islam and Peace,
                    Women in the Ancient & Modern Middle East,
                    Islamic Art and Architecture,
                    Narr of the Middle,
                    Islamic Civilization,
                    Muslim Societies,
                    Shi'i Islam,
                    Islamic Mysticism,
                    Science & Civilization in Islam,
                    Islam and Politics,
                    Islamic Philosophy & Theology,
                    Islamic Law,
                    Poetics & Politics in Arab Lit,
                    Persian Literature,
                    Modern Iran,
                    Indo-Islamic Civilization,
                    Islam in South Asia,
                    Arab Women's Literature,
                    Anthro & Iranian Studies,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <CultureArticles></CultureArticles>
                </div>
            </div>
        </div>
    );
};

export default CultureScope;