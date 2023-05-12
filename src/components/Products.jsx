import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import AllCoffeeCard from "./AllCoffeeCard";
import { useState } from "react";

/* eslint-disable react/prop-types */

const Products = ({coffees}) => {
    const [loadedCoffees, setLoadedCoffees] = useState(coffees)
    console.log(loadedCoffees)
    return (
        <div className="my-8" style={{ backgroundImage: `url("https://i.ibb.co/QHsRvMB/1.png")` }}>
            <div className="container min-h-screen flex flex-col justify-center items-center mx-auto p-4">
                <div className="text-center">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-rancho text-4xl font-bold text-[#331A15] my-2">Our Popular Products</h2>
                    <Link to="/add"><button className="btn normal-case text-xl rounded-none bg-[#E3B577] text-[#242222] gap-2 hover:bg-[#242222] hover:text-white hover:border hover:border-white font-rancho">Add Coffee <FiCoffee /> </button></Link>
                </div>
                <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-4">
                    {
                        loadedCoffees.map(coffee => <AllCoffeeCard key={coffee._id} coffee={coffee} loadedCoffees={loadedCoffees} setLoadedCoffees={setLoadedCoffees}></AllCoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;