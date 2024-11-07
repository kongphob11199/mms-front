import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { userGRPC } from "./api/gapi/user.gapi";
import { CreateUserCustomerRequest } from "./proto/user_pb";
import { Gender } from "./proto/enum_pb";
import { Timestamp } from "google-protobuf/google/protobuf/timestamp_pb";

function App() {
  const loadUser = async () => {
    await userGRPC
      .findAll()
      .then((data) => {
        console.log(data); // Handle successful response
      })
      .catch((error) => {
        console.error("222 Error:", error); // Handle error
      });
  };

  const createCustomer = async () => {
    const req = new CreateUserCustomerRequest();
    req.setFirstname("test-f-1");
    req.setLastname("test-l-1");
    req.setGender(Gender.MALE);

    // Convert the birthday string to a Timestamp object
    const birthdayDate = new Date("2000-01-01"); // Use the desired date here
    const birthdayTimestamp = new Timestamp();
    birthdayTimestamp.setSeconds(Math.floor(birthdayDate.getTime() / 1000)); // Set seconds since epoch
    birthdayTimestamp.setNanos((birthdayDate.getTime() % 1000) * 1e6); // Set nanoseconds

    req.setBirthday(birthdayTimestamp);
    await userGRPC
      .createUserCustomer(req)
      .then((data) => {
        console.log(data); // Handle successful response
      })
      .catch((error) => {
        console.error("Error:", error); // Handle error
      });
  };

  useEffect(() => {
    // loadUser();
    createCustomer();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
