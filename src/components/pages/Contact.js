import React, { Component } from "react";
import gif from "../../assests/images/happy.gif";

class Contact extends Component {
  state = {
    client: " ",
    subject: " ",
    message: " ",
    email: " ",
    visible: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!", res);
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  handleSubmit = event => {
    const { client, message, email, subject } = this.state;

    event.preventDefault();

    const templateId = "possible_work";

    this.sendFeedback(templateId, {
      subject,
      client_email: email,
      client,
      message
    });

    this.setState({
      visible: true,

      message: "",
      email: ""
    });
  };

  render() {
    const { client, message, email, subject, visible } = this.state;
    if (!visible) {
      return (
        <div
          className="container column gradient"
          style={{ alignItems: "center" }}
        >
          <h1>CONTACT ME</h1>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <label>Full Name:</label>
            <input
              className="draw"
              type="text"
              placeholder="Jon Doe"
              value={client}
              name="client"
              onChange={this.onChange}
            />
            <label>Your Email:</label>
            <input
              className="draw"
              type="text"
              placeholder="jon@example.com"
              value={email}
              name="email"
              onChange={this.onChange}
            />
            <label>Subject:</label>
            <input
              className="draw"
              type="text"
              placeholder="We Should Work Together..."
              value={subject}
              name="subject"
              onChange={this.onChange}
            />
            <label style={{ marginRight: "64%" }}>Leave a message:</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="message draw"
              value={message}
              onChange={this.onChange}
            />
            <input type="submit" value="SUBMIT" className="submit-btn" />
          </form>
        </div>
      );
    }
    return (
      <div
        className="container column gradient"
        style={{ alignItems: "center" }}
      >
        <h1>Thank you </h1>
        <img src={gif} alt="happy-dance" />
        <h1>I will be getting back with you soon</h1>
      </div>
    );
  }
}

export default Contact;
