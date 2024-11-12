import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [checked, setChecked] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const check = e.target.terms.checked;

        console.log(email, password, check);

        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

        setSuccess(false);
        setError('');

        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return;
        }

        if (!regex.test(password)) {
            setError('Password is invalid');
            return;
        }

        if (!check) {
            setError("Please except our terms and conditions");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
                setSuccess(true);

                sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert("Verification mail is sended in your email");
                })
            })
            .catch((error) => {
                console.log("ERROR - ", error.message);
                setError(error.message);
                setSuccess(false);
            });
    };

    return (
        <div className="max-w-screen-sm mx-auto mt-6 pb-10">
            <h1 className="text-4xl font-bold text-center">Sign Up</h1>

            <form onSubmit={handleSignUp} className="space-y-4 mt-6">
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="email" name="email" className="grow" placeholder="Email" />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type={showPassword ? "text" : "password"} name="password" className="grow" placeholder="Password" />

                    <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs">
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                    </button>
                </label>

                <div className="form-control">
                    <label className="cursor-pointer label justify-start gap-2">
                        <input type="checkbox" name="terms" className="checkbox checkbox-accent" />
                        <span className="label-text">i agree the terms and condition</span>
                    </label>
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">Account is successfully created</p>}

                <button className="btn btn-accent btn-wide mt-4">Submit</button>
            </form>


            {
                <p>Already have an account? please sign in <Link to={"/login"}>Sign In</Link></p>
            }
        </div>
    );
};

export default SignUp;