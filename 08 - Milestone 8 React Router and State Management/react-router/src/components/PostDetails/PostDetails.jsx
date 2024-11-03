import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post;

    const {postId} = useParams();
    console.log(postId)

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Post Details Page - </h2>
            <h3>{title}</h3>
            <h4>{body}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;