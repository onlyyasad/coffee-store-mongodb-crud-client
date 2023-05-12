/* eslint-disable react/prop-types */
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AllCoffeeCard = ({ coffee, loadedCoffees, setLoadedCoffees }) => {
    const { _id, name, chef, taste, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = loadedCoffees.filter(coffee => coffee._id !== _id);
                            setLoadedCoffees(remaining)
                            console.log(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className="card card-side justify-center items-center gap-8 bg-base-200 rounded-none p-4">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="">
                <p><span className='font-bold'>Name:</span> {name}</p>
                <p><span className='font-bold'>Chef:</span> {chef}</p>
                <p><span className='font-bold'>Taste:</span> {taste}</p>
            </div>
            <div className="btn-group gap-2 btn-group-vertical">
                <div className="tooltip tooltip-right tooltip-success" data-tip="View">
                    <Link to={`/view/${_id}`}><button className="btn btn-success normal-case"><FaEye /></button></Link>
                </div>
                <div className="tooltip tooltip-right tooltip-warning" data-tip="Update">
                    <Link to={`/update/${_id}`}><button className="btn btn-warning normal-case"><FaEdit /></button></Link>
                </div>
                <div className="tooltip tooltip-right tooltip-error" data-tip="Delete">
                    <Link><button onClick={() => handleDelete(_id)} className="btn btn-error normal-case"><FaTrashAlt /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllCoffeeCard;