import ContemporaryArticls from "../../../Articles/ContemporaryArticls/ContemporaryArticls";

const ContemporaryIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <ContemporaryArticls></ContemporaryArticls>
            </div>
        </div>

    );
};

export default ContemporaryIssue;
