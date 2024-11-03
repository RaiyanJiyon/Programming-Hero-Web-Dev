import { useNavigate, useParams, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleGoBackToHome = () => {
        navigate("/");
    }

    return (
        <div>
            <h1>OOPS!</h1>
            <i>{error.statusText || error.message}</i>
            <button onClick={handleGoBackToHome}>Go Back To Home</button>
        </div>
    );
};

export default ErrorPage;