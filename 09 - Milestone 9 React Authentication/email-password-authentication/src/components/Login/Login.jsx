import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [success, setSuccess] = useState(false);

    const emailRef = useRef();

    const handleLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        // reset success
        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);

                if (!userCredential.emailVerified) {
                    alert("Please verify your account first")
                    return;
                }
                else {
                    setSuccess(true);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        console.log("Reset", email);

        if (!email) {
            alert("Please provide an valid email");
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Verification link are provided in your email, please check your email and verify the account")
            })
            .catch((error) => {
                // const errorMessage = error.message;
                // ..
            });

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        success ?
                            <p className="text-green-500 text-center -mt-4">Successfully Log In</p>
                            :
                            <p className="text-red-500 text-center -mt-4">Email address or Password are invalid</p>
                    }

                    {
                        <p>New to this website? please sign up <Link to={"/signUp"}>Sign Up</Link></p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;