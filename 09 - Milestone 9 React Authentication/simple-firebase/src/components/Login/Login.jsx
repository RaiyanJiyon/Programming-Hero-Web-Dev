import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import auth from "../../firebase.init";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log("ERROR - ", error);
                setUser(null);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            {
                user ? 
                <button onClick={handleSignOut} className="btn">Sign Out</button>
                :
                <>
                <button onClick={handleGoogleSignIn} className="btn">Sign Up With Google</button>
                <button onClick={handleGithubSignIn} className="btn">Sign Up With Github</button>
                </>

            }


            {
                user && <div>
                    <p>User Name: {user.displayName}</p>
                    <p>User Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }


        </div>
    );
};

export default Login;