export default function User({user}) {
    console.log(user)
    const {name, email} = user;
    console.log(name, email)
    return (
        <div className="box">
            <h4>Friend Name: {name}</h4>
            <h5>Friend Email: {email}</h5>
        </div>
    )
}