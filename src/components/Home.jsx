import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Features from "./Features";
import Instagram from "./Instagram";
import Products from "./Products";


const Home = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Products coffees={coffees}></Products>
            <Instagram></Instagram>
        </div>
    );
};

export default Home;