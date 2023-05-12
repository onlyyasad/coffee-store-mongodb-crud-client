import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const ViewCoffee = () => {
    const coffee = useLoaderData();
    const {name, supplier, category, chef, taste, details, photo} = coffee;
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/0nGJ6N9/11.png")` }} className="">
            <div className="p-4 mt-8 mb-16 mx-auto md:w-3/4">
                <Link className="flex mb-8 items-center gap-2" to="/"><FaArrowLeft /> <span className="font-rancho font-bold font-xl">Back to Home</span></Link>
                <div className="bg-base-200 flex items-center gap-8 p-4 md:p-16">
                    <div className="">
                        <img src={photo} alt="" />
                    </div>
                    <div className="space-y-2">
                        <h2 className="font-rancho text-3xl mb-6 font-bold">Niceties</h2>
                        <p><span className="font-semibold">Name:</span> {name}</p>
                        <p><span className="font-semibold">Chef:</span> {chef}</p>
                        <p><span className="font-semibold">Supplier:</span> {supplier}</p>
                        <p><span className="font-semibold">Taste:</span> {taste}</p>
                        <p><span className="font-semibold">Category:</span> {category}</p>
                        <p><span className="font-semibold">Details:</span> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoffee;