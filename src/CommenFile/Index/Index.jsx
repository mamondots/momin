import inboxes from '../../../public/index.json'
const Index = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Index</h2>

            <div className='my-4 space-y-2'>
                 {
                    inboxes.map(index => <div key={index.id}>
                        <p className='font-medium text-[#6b6b6b]'>{index.index}</p>
                    </div>)
                 }
            </div>
        </div>
    );
};

export default Index;