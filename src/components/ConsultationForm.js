import React, { Component } from 'react';
import { ConsultationCard, Dropdown } from './';
import { ConsultationForm, ConsultationInput, Pill, PillBox } from '../styled-components/components/ConsultationForm';
import treatmentsList from '../data/treatmentsList';
import { Button } from '../styled-components/global'

class ConsultationFormComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTreatments: [],
      name: "",
      surname: "",
      phone: "",
      email: ""
    }
  }
  submitForm = (e) => {
    e.preventDefault();
    const { name, surname, email, phone, selectedTreatments } = this.state;
    var data = {
      name: name,
      surname: surname,
      phone: phone,
      email: email,
      procedures: selectedTreatments.join(', '),
      option: 1
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
        selectedTreatments: [],
        name: "",
        surname: "",
        phone: "",
        email: ""
      })
    })
    .catch(err => {
      alert("Something went wrong. Please contact Dr. Castillo's office directly. We are sorry for the inconvenience.")
      this.setState({
        selectedTreatments: [],
        name: "",
        surname: "",
        phone: "",
        email: ""
      })
    })
  }
  changeState = (e, prop) => {
    let obj = {};
    obj[prop] = e.target.value;
    this.setState(obj);
  }
  changeTreatment = (e) => {
    e.preventDefault();
    if(e.target.value){
      console.log(e.target.value);
      let vals = this.state.selectedTreatments;
      let removeIndex = vals.findIndex(a => a == e.target.value);
      if(removeIndex == -1){
        vals.push(e.target.value)
      } else {
        vals.splice(removeIndex, 1);
      }
      this.setState({selectedTreatments: vals})
    }
  }
  render(){
    const { name, surname, email, phone, selectedTreatments } = this.state;
    return (
      <ConsultationForm onSubmit={this.submitForm}>
        <ConsultationCard title="REQUEST A CONSULTATION">
          <ConsultationInput
            placeholder="Name"
            onChange={(e) => { this.changeState(e, "name")}}
            value={name} type="text" required
          />
          <ConsultationInput
            placeholder="Surname"
            onChange={(e) => { this.changeState(e, "surname")}}
            value={surname} type="text" required
          />
        </ConsultationCard>
        <ConsultationCard title="OTHER INFORMATION">
          <ConsultationInput
            placeholder="Phone"
            onChange={(e) => { this.changeState(e, "phone")}}
            value={phone} type="tel" required
          />
          <ConsultationInput
            placeholder="Email"
            onChange={(e) => { this.changeState(e, "email")}}
            value={email} type="email" required
          />
        </ConsultationCard>
        <ConsultationCard title="TREATMENTS">
          <PillBox>
            {
              selectedTreatments && selectedTreatments.length ?
              selectedTreatments.map((a,i) => <Pill key={i}>{a}</Pill>) : null
            }
          </PillBox>
          <Dropdown
            placeholder="Select Treatment(s)"
            options={treatmentsList}
            value={selectedTreatments}
            onClick={this.changeTreatment}
            required multiple
          />
          <Button
            color1="#5ad4f1" color2="#fff"
            color3="#fff" type="submit"
            style={{
              fontSize: '12px',
              fontWeight: 'normal',
              borderWidth: '1px'
            }}
          >REQUEST NOW</Button>
        </ConsultationCard>
      </ConsultationForm>
    );
  }
}

export default ConsultationFormComponent;
