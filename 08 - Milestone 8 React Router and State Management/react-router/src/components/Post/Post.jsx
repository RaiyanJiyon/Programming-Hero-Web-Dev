import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
    const { id, userId, title, body } = post;

    const postStyle = {
        border: '2px solid yellow',
        padding: '20px',
        borderRadius: '20px'
    };

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`)    
    }


    return (
        <div style={postStyle}>
            <h3>Post Title - {title}</h3>
            <h3>Post Body - {body}</h3>
            <Link to={`/post/${id}`}>Details</Link>
            <button onClick={handleDetails}>Show Details</button>

        </div>
    );
};

export default Post;