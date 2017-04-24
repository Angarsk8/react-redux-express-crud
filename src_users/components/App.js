import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

// App component
export class App extends React.Component {
  // render
  render() {
    const {children}=this.props;
    // render
    return (
      <div className="container">
        <div>{children}</div>
      </div>
    );
  }
}


export default App;
