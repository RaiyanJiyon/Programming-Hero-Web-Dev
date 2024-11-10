
const ReusableForm = ({submitValueText = 'Submit', handleSubmit, children}) => {

    const handleLocalForm = e => {
        e.preventDefault();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        handleSubmit(data);
    }
    return (
        <div>
            {children}
            <form onSubmit={handleLocalForm}>
                <input type="text" name="name" />
                <br /> <br />
                <input type="email" name="email" />
                <br /> <br />
                <input type="password" name="password" />
                <br /> <br />
                <input type="submit" value={submitValueText} />
            </form>
        </div>
    );
};

export default ReusableForm;