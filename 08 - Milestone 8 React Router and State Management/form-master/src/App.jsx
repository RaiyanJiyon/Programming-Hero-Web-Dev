import "./App.css";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.number.value);
  };

  const handleSubmitForm = (data) => {
    console.log("Form Data - ", data);
  };

  const handleProfileForm = (data) => {
    console.log("User Profile Update Data - ", data);
  };

  return (
    <>
      {/* <h1>Form</h1> */}
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="text" name="number" />
        <br />
        <input type="submit" value="Submit" />
      </form> */}

      {/* <StatefulForm /> */}
      {/* <RefForm /> */}
      <ReusableForm
        submitValueText={"Submission"}
        handleSubmit={handleSubmitForm}
      >
        <h1>Submission Form</h1>
        <h3>Always submit valid data</h3>
      </ReusableForm>
      <ReusableForm handleSubmit={handleProfileForm}>
        <h3>Profile Update Form</h3>
        <h4>Always keep updated your profile</h4>
      </ReusableForm>
    </>
  );
}

export default App;
