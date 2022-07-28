import React, { useState } from "react";
import { data } from "./data.js";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  //console.log(search);

  return (
    <div className="App text-white-50">
      <div className="container text-white-50">
        <h1 className="text-center mt-4">Contact Keeper</h1>
        <form>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="form-control"
            placeholder="Seacrh Contacts"
          />
        </form>
        {/* <p>{search}</p> */}
        <table className="table table-striped table -hover table-bordered text-white-50 mt-2 border-primary bdr">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.first_name.toLocaleLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

// Guide
/* for getting json file use this website: https://www.mockaroo.com/ */
