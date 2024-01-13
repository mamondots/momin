import JaesArticles from "../../../Articles/JaesArticles/JaesArticles";

const JaesCurrentIssu = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="">
                <JaesArticles></JaesArticles>
            </div>
        </div>

    );
};

export default JaesCurrentIssu;