import SportsArticles from "../../../Articles/SportsArticles/SportsArticles";

const SportsScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-4 gap-24">
                <p className="text-[15px]">
                    Foundations of Physical Education, 
                    Individual and Dual Sports, 
                    Team and Recreational Sports, 
                    First Aid, 
                    Kinesiology, 
                    Health Education, 
                    Physical Education for the Elementary School, 
                    Motor Learning, 
                    Physiology of Exercise, 
                    Organization and Administration of Physical Education and Athletics, 
                    Developing Fitness Programs, 
                    Motivational Aspects of Coaching Theory, 
                    Prevention and Treatment of Athletic Injuries, 
                    Materials and Methods of Teaching Physical Education, 
                    Physical Education for the Exceptional Child, 
                    Methods of Teaching Elementary PE, 
                    Foundations of Sport Management, 
                    Dynamics of Health & Nutrition, 
                    Coaching and Sport Theory, 
                    Research Methods and Design in Sports Management, 
                    Risk Management and Legal Issues in Sport, 
                    Business Management of Community/Club Sports and Recreation, 
                    Administration of Interscholastic and Intercollegiate Sport, 
                    Budgeting and Finance in Sports and Recreation, 
                    Sport Marketing, 
                    Global Sport, 
                    Olympic/Paralympic Movements, 
                    Sport Governance, 
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                <div>
                    <SportsArticles></SportsArticles>
                </div>
            </div>
        </div>
    );
};

export default SportsScope;