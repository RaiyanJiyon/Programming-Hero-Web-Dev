import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../assets/provider/AuthProvider";

const Login = () => {
    const {signInUser, signInWithGoogle} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            e.target.reset();
            navigate("/")
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            navigate("/")
            console.log("Sign in with google", result.user);
        })
        .catch(error => {
            console.log("ERROR", error);
        })
    }

    return (
        <div className="w-11/12 mx-auto hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <button onClick={handleGoogleSignIn} className="btn btn-ghost">Sign In With Google</button>
                    <p>Don&apos;t have an account? please <Link to={"/register"}>register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;