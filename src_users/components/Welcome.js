import React from "react";
import { connect } from "react-redux";
import "../stylesheets/welcome.css";
import { listWelcomeItems } from "../actions/welcome";

// App component
class Welcome extends React.Component {
  // render
  render() {
    return (
      <div className="container welcome-box">
        <div className="header-box">
          <div className="header-img-box">
            <img src="/logo.png" alt=""/>
          </div>
        </div>
        <h1>Hey!, this is THE SOFT DEV TEAM'S TEST, hope you get ready!!</h1>
        <ul>
          <li>0. Bind each component to redux storage in order to comunicate the components.</li>
          <li>1. We need a <span className="component-name"><b>TableList</b></span> component, which by default list 3 users, the fields for each user are: <b>name, lastName, phone,state(<span className="active">active</span>,<span className="inactive">inactive</span>).</b> </li>
          <li>2. We need a <span className="component-name"><b>NewUser</b></span> component, also create a button above the table to redirect the user to the <i>newUser</i> page in order to create the new user.</li>
          <li>3. We need a <span className="component-name"><b>EditUser</b></span> component, also add an edit button in each row of the table and perform a redirection to <i>editUser</i> the edit user page</li>
          <li>4. We need a <span className="component-name"><b>RemoveUser</b></span> component in order to remove an user, that means, there is a remove button in each row of the table,<b><i> note: use the state property to disable an user</i></b>,<i> remember, inmmutability is very important!</i> </li>
          <li>5. Control the data flow using redux, but add some data persistence using mongodb, the idea is, if I refresh the page I should be able to see the edited, added , ande removeD records</li>
          <li>6. Show us your unit testing skills and write some test!</li>
        </ul>
      </div>
    );
  }
}

export default Welcome;
