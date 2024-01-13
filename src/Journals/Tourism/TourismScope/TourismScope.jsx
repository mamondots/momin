import TourismArticles from "../../../Articles/TourismArticles/TourismArticles";


const TourismScope = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D]">Aims & Scope</h2>

            <div className="flex items-center py-8 gap-24">
                <p className="text-[15px]">
                    Basic Issues of Hospitality and Tourism,
                    Food Production Management,
                    Hotel Operations,
                    Food Service Management,
                    Hospitality Personnel Management,
                    Hospitality and Tourism Law,
                    Hospitality Managerial Accounting,
                    Nutrition,
                    Hospitality Management Communication,
                    Casino Management,
                    Hotel Management,
                    Gaming and Social Policy,
                    Club Management,
                    Menu and Food Production Management,
                    Catering and Banquet Management,
                    Lodging Management,
                    Food and Beverage Management,
                    Critical Issues in the Food Industry,
                    Catering and Banquet Management,
                    Convention Sales Management,
                    Event Management,
                    Meeting, Convention, and Event Management,
                    Tourism Policy and Planning,
                    Hospitality Marketing Management,
                    Culture, Heritage & Entrepreneurship,
                    Front Office Management,
                    Culinary Theory & Practice,
                    Bakery and Patisseries,
                    International Economics and Tourism,
                    International Politics and Tourism,
                    Hospitability across cultures,
                    International Tourism Environment,
                    National Economy and Tourism Industry,
                    Organization Leadership in Tourism,
                    National and International Tourism,
                    Resort and Recreation Management,
                    Travel Agency Management,
                </p>
            </div>

            <div className='py-2'>
                <h2 className='font-medium text-[#91000D] py-2'>Current Issue</h2>
                <div>
                    <TourismArticles></TourismArticles>
                </div>
            </div>
        </div>
    );
};

export default TourismScope;