import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>This is Home Page</h1>
            <Header />
            {
                navigation.state === "loading" ? <p>Loading</p> : <Outlet />
            }
            <Footer />
        </div>
    );
};

export default Home;