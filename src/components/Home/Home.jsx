import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'


const Home = () => {
    return (
        <div>
            <h1>Hello Home</h1>
            <Header></Header>
            <div>

            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;