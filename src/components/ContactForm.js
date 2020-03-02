import React, { Component } from 'react';
import { ContactForm, ContactWrap, Input, TextArea } from '../styled-components/components/ContactForm';
import { Button, H2BannerTitle } from '../styled-components/global'

class ContactFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: ""
    }
  }
  submitForm = (e) => {
    console.log("submit");
    e.preventDefault();
    const { name, surname, phone, email, message } = this.state;
    var data = {
      name: name,
      surname: surname,
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
      console.log("success");
      alert("An email has been submitted to Dr. Castillo's office. Someone will be in contact with you regarding your inquiry.")
      this.setState({
        name: "",
        surname: "",
        phone: "",
        email: "",
        message: ""
      })
    })
    .catch(err => {
      console.log("crash");
      alert("Something went wrong. Please contact Dr. Castillo's office directly. We are sorry for the inconvenience.")
      this.setState({
        name: "",
        surname: "",
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
    console.log(obj);
  }
  render(){
    const { name, surname, email, phone, message } = this.state;
    return (
      <ContactForm onSubmit={this.submitForm}>
        <ContactWrap>
          <H2BannerTitle>SEND US A MESSAGE</H2BannerTitle>
          <Input
            placeholder="Name"
            onChange={(e) => { this.changeState(e, "name")}}
            value={name} type="text" required
          />
          <Input
            placeholder="Surname"
            onChange={(e) => { this.changeState(e, "surname")}}
            value={surname} type="text" required
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
