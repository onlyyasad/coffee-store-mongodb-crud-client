import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div className="my-8">
            <div className="flex flex-col justify-center items-center">
                <Link className="flex mb-8 items-center gap-2" to="/"><FaArrowLeft /> <span className="font-rancho font-bold font-xl">Back to Home</span></Link>
            </div>
            <img className="mx-auto" src="https://i.ibb.co/SKz81Mp/404.gif" alt="" />
        </div>
    );
};

export default Error;