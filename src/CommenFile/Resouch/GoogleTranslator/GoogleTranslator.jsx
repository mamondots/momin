const GoogleTranslator = () => {
    return (
        <div className="my-8">
            <h2 className="font-medium text-[#0D2357]">Google Translator</h2>

            <div className="text-[#262626ee] my-4">
                <p className="text-[15px]">
                    Google's free online language translation service instantly translates text and web pages.
                    It will help the authors of ARIPD Journals to translate their research papers from native
                    to English (especially for the authors whose language is not English). Use the following
                    link in this regard.
                    It is wise to review your paper after translating the paper through Google Translator.
                </p>
                <div className="my-4 text-[15px]">
                    <a className="text-[#8D0012] hover:text-[#0D2357] duration-300 cursor-pointer" href="https://translate.google.com/" target="_black">https://translate.google.com/</a>
                </div>
            </div>
        </div>
    );
};

export default GoogleTranslator;