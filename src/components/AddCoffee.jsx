import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = event => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, supplier, category, chef, taste, details, photo };
        console.log(newCoffee)

        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Coffee Added Successfully!',
                        'success'
                    )
                    form.reset()
                }
            })
    }
    return (
        <div style={{ backgroundImage: `url("https://i.ibb.co/0nGJ6N9/11.png")` }} className="">
            <div className="p-4 mt-8 mb-16 mx-auto md:w-3/4">
                <Link className="flex mb-8 items-center gap-2" to="/"><FaArrowLeft /> <span className="font-rancho font-bold font-xl">Back to Home</span></Link>
                <form onSubmit={handleAddCoffee} className="bg-base-200 p-4 md:p-16">
                    <h1 className="font-rancho font-bold text-3xl text-center">Add New Coffee</h1>
                    <p className="text-center my-2">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="name">Name</label>
                                <input className="p-2" type="text" name="name" id="name" placeholder="Enter coffee name" />
                            </div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="supplier">Supplier</label>
                                <input className="p-2" type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" />
                            </div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="category">Category</label>
                                <input className="p-2" type="text" name="category" id="category" placeholder="Enter coffee category" />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="chef">Chef</label>
                                <input className="p-2" type="text" name="chef" id="chef" placeholder="Enter coffee chef" />
                            </div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="taste">Taste</label>
                                <input className="p-2" type="text" name="taste" id="taste" placeholder="Enter coffee taste" />
                            </div>
                            <div className="flex flex-col mb-2 gap-2">
                                <label className="font-semibold" htmlFor="details">Details</label>
                                <input className="p-2" type="text" name="details" id="details" placeholder="Enter coffee details" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mb-2 gap-2">
                        <label className="font-semibold" htmlFor="photo">Photo</label>
                        <input className="p-2" type="text" name="photo" id="photo" placeholder="Enter photo URL" />
                    </div>
                    <button className="btn w-full mt-2 normal-case text-xl rounded-none bg-[#E3B577] text-[#242222] hover:text-white hover:border hover:border-white font-rancho" type="submit">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;