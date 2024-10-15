import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {
  const [count, setCount] = useState(0);
  const actors = ["Tom Cruse", "Tony Stark", "Chris Evans", "Chris Hemsworth"];
  const ages = [44, 42, 35, 55];
  const singers = [
    { name: "Atif Aslam", city: "Karachi" },
    { name: "Arijith Singh", city: "Mumbai" },
    { name: "KKR", city: "Chennai" },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      <DisplayInformation></DisplayInformation>
      <Student name="John" id="101" subject="CSE" grade="A+"></Student>
      <Student name="Roman" id="103" subject="EEE" grade="A"></Student>
      <Student name="Randy" id="105" subject="BBA" grade="B"></Student>
      <Student name="Chris" id="107" subject="Textile" grade="B-"></Student>

      <Employee
        name="Cena"
        position="Product Manager"
        designation="CS Engineer"
        salary={5000}
      ></Employee>
      <Employee
        name="Marsh"
        position="Front-End Developer"
        designation="CS Engineer"
        salary={1000}
      ></Employee>
      <Employee
        name="Clark"
        position="Back-End Developer"
        designation="CS Engineer"
        salary={2000}
      ></Employee>
      <Employee
        name="Smith"
        position="Full-Stack Developer"
        designation="CS Engineer"
        salary={3000}
      ></Employee>

      <Todo task="Basic React" isComplete={true}></Todo>
      <Todo task="Intermediate React" isComplete={false}></Todo>
      <Todo task="Advance React" isComplete={false}></Todo>

      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {
        singers.map((singer, index) => <Singers key={index} name={singer.name} city={singer.city}></Singers>)
      }
    </>
  );
}

function DisplayInformation() {
  const person = {
    name: "John",
    age: 33,
    profession: "Web Developer",
  };

  return (
    <h3>
      My name is {person.name} and i am {person.age} years old and my profession
      is {person.profession}
    </h3>
  );
}

function Student(props) {
  console.log(props);
  const paragraphStyle = {
    color: "hotpink",
  };
  return (
    <div className="student">
      <p style={paragraphStyle}>Student ID: {props.id}</p>
      <p style={paragraphStyle}>Student Name: {props.name}</p>
      <p style={{ color: "hotpink" }}>Student Subject: {props.subject}</p>
      <p style={{ color: "hotpink" }}>Student Grade: {props.grade}</p>
    </div>
  );
}

function Employee({ name, position, designation, salary }) {
  const employeeContainer = {
    margin: "10px",
    border: "2px solid red",
    padding: "5px",
    borderRadius: "5px",
    color: "aqua",
  };

  return (
    <div style={employeeContainer}>
      <h3>Employee Name: {name}</h3>
      <h3>Employee Position: {position}</h3>
      <h3>Employee Designation: {designation}</h3>
      <h3>Employee Salary: {salary}$</h3>
    </div>
  );
}

export default App;
