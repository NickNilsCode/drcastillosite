import React, { Component } from 'react';
import { ContactForm, ContactWrap, Input, TextArea } from '../styled-components/components/ContactForm';
import { Button, H2BannerTitle } from '../styled-components/global'

class ContactFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: ""
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, message } = this.state;
    var data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      message: message,
      option: 2
    }
    fetch('/emailer', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      alert("An email has been submitted to Dr. Castillo's office. Someone will be in contact with you regarding your inquiry.")
      this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      })
    })
    .catch(err => {
      alert("Something went wrong. Please contact Dr. Castillo's office directly. We are sorry for the inconvenience.")
      this.setState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
      })
    })
  }
  changeState = (e, prop) => {
    let obj = {};
    obj[prop] = e.target.value;
    this.setState(obj);
  }
  render(){
    const { firstName, lastName, email, phone, message } = this.state;
    return (
      <ContactForm onSubmit={this.submitForm}>
        <ContactWrap>
          <H2BannerTitle>SEND US A MESSAGE</H2BannerTitle>
          <Input
            placeholder="First Name"
            onChange={(e) => { this.changeState(e, "firstName")}}
            value={firstName} type="text" required
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => { this.changeState(e, "lastName")}}
            value={lastName} type="text" required
          />
          <Input
            placeholder="Phone"
            onChange={(e) => { this.changeState(e, "phone")}}
            value={phone} type="tel" required
          />
          <Input
            placeholder="Email"
            onChange={(e) => { this.changeState(e, "email")}}
            value={email} type="email" required
          />
          <TextArea
            placeholder="Message"
            onChange={(e) => { this.changeState(e, "message")}}
            value={message} required
          />
          <Button type="submit">SUBMIT MESSAGE</Button>
        </ContactWrap>
      </ContactForm>
    );
  }
}

export default ContactFormComponent;
