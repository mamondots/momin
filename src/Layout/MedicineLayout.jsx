import { Outlet } from "react-router-dom";
import MedicineNav from "../Journals/Medicine/MedicineNav/MedicineNav";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import RoutingTop from "../Utilities/PageTitle/RoutingTop/RoutingTop";


const MedicineLayout = () => {
    return (
        <div className="mt-28">
            <PageTitle title={"International Journal of Medicine and Pharmacy"}></PageTitle>

            <div className="flex px-20 my-8 gap-8">
                <RoutingTop>
                    <MedicineNav></MedicineNav>
                    <Outlet></Outlet>
                </RoutingTop>
            </div>

        </div>
    );
};

export default MedicineLayout;