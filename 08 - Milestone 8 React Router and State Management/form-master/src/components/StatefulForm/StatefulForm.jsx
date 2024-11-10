import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setError('');

        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    console.log(name);
    console.log(email);
    console.log(password);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleName} type="text" name="name" />
                <br />
                <input onChange={handleEmail} type="email" name="email" />
                <br />
                <input onChange={handlePassword} type="password" name="password"  />
                <br />
                <input type="submit" value="Submit" />
                {error && <p style={{ color: 'red' }}>{error}</p>}

            </form>
        </div>
    );
};

export default StatefulForm;