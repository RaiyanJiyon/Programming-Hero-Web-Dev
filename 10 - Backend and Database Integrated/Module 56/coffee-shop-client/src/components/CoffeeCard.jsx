import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    console.log(coffee)
    const { _id, name, chef, supplier, taste, category, details, photoURL } = coffee

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });
    }


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photoURL}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View</button>
                        <Link to={`/update-coffee/${_id}`}>
                        <button className="btn btn-primary">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;