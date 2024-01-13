import ArchaeologyArticle from "../../../Articles/ArchaeologyArticle/ArchaeologyArticle";

const ArchaeologyCurrentIssu = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ArchaeologyArticle></ArchaeologyArticle>
            </div>
        </div>

    );
};

export default ArchaeologyCurrentIssu;
