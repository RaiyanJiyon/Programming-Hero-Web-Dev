import { useEffect } from "react";
import { useState } from "react"
import './Posts.css'
import Post from "./Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>  res.json())
        .then((data) => setPosts(data))
    } ,[])

    
    return (
        <div className="box">
            <h3>Posts: {posts.length}</h3>

            {
                posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))
            }
        </div>
    )
}