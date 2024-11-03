import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user

    const userStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={userStyle}>
            <h3>User Name: {name}</h3>
            <h4>User Name: {username}</h4>
            <h5>User Name: {email}</h5>
            <Link to={`/user/${id}`}>Details</Link>
            <Link to={`/user/${id}`}><button>Click Me</button></Link>
        </div>
    );
};

export default User;