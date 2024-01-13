import useEditorials from "../../../Hooks/useEditorials";

const AccountingBoard = () => {
    const [editorials] = useEditorials()
    const accountingEditoris = editorials.filter((editorial) => editorial.category === 'Accounting')
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Editorial Boad</h2>

            <div className="my-8 space-y-3">
                {
                    accountingEditoris.map((board, index) => <div key={index}>
                        <h2 className="flex  items-center space-x-2 font-medium">{board.name}</h2>
                        <p className="text-[#262525dd]">{board.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AccountingBoard;