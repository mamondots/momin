import useEditorials from "../../../Hooks/useEditorials";

const JeaBoard = () => {
    const [editorials] = useEditorials()
    const engineeringEditoris = editorials.filter((editorial) => editorial.category === 'Engineering')
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Editorial Boad</h2>

            <div className="my-4 space-y-3">
                {
                    engineeringEditoris.map((board, index) => <div key={index}>
                        <h2 className="flex  items-center space-x-2 font-medium">{board.name}</h2>
                        <p className="text-[#262525dd]">{board.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default JeaBoard;