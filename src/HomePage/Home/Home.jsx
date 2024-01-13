import PageTitle from '../../Utilities/PageTitle/PageTitle';
import RoutingTop from '../../Utilities/PageTitle/RoutingTop/RoutingTop';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeJournal from '../HomeJournal/HomeJournal';
import HomeResearch from '../HomeResearch/HomeResearch';
import './Home.css'

const Home = () => {
    return (
        <div>
            <PageTitle title={'Home'}></PageTitle>
            <RoutingTop>
                <Banner></Banner>
                <HomeJournal></HomeJournal>
                <HomeAbout></HomeAbout> 
                <HomeResearch></HomeResearch>
            </RoutingTop>
        </div>
    );
};

export default Home;