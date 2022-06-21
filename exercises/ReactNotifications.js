import React from "react";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: "value",
      formValue: "",
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEvent() {
    this.setState({ someKey: "newValue" });
    this.notify(this.state.formValue);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ formValue: value });
  }

  notify(message) {
    // Boilerplate notification pulled from MDN
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var notification = new Notification(message);
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          var notification = new Notification(message);
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  render() {
    return (
      <div className="Component-class">
        <div>Component!!</div>

        <div>{this.state.formValue}</div>
        <input
          type="text"
          placeholder="text here"
          onChange={this.handleChange}
          value={this.state.formValue}
        ></input>

        <button onClick={this.handleEvent}>Changes</button>
      </div>
    );
  }
}
