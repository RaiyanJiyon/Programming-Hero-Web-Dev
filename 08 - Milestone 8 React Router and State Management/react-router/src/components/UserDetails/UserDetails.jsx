import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();

    const {name} = user;
    return (
        <div>
            <h2>User Details Page - </h2>
            <h2>User Name - {name}</h2>
        </div>
    );
};

export default UserDetails;