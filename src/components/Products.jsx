import { FiCoffee } from "react-icons/fi";
const Products = () => {
    return (
        <div className="my-8" style={{ backgroundImage: `url("https://i.ibb.co/QHsRvMB/1.png")` }}>
            <div className="container min-h-screen flex flex-col justify-center items-center mx-auto p-4">
                <div className="text-center">
                    <p>--- Sip & Savor ---</p>
                    <h2 className="font-rancho text-4xl font-bold text-[#331A15] my-2">Our Popular Products</h2>
                    <button className="btn normal-case text-xl rounded-none bg-[#E3B577] text-[#242222] gap-2 hover:bg-[#242222] hover:text-white hover:border hover:border-white font-rancho">Add Coffee <FiCoffee /> </button>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Products;