export default function Post({post}) {
    console.log(post)
    const {userId, id, title, body} = post
    return (
        <div className="box">
            <h4>User Id: {userId}</h4>
            <h4><small>Id: </small>{id}</h4>
            <h4>Title: {title}</h4>
            <h4>Body: {body}</h4>
        </div>
    )
}