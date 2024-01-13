import PhysicsArticles from "../../../Articles/PhysicsArticles/PhysicsArticles";

const PhysicsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <PhysicsArticles></PhysicsArticles>
            </div>
        </div>

    );
};

export default PhysicsIssue;
