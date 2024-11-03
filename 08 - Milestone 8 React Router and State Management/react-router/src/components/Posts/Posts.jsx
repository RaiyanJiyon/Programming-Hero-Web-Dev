import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import './Posts.css'


const Posts = () => {
    const posts =  useLoaderData();

    return (
        <div>
            <h2>This is Posts Page</h2>
            <h2>Total Posts - {posts.length}</h2>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.userId} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;