import React, { Component } from 'react';
import ContactField from './components/ContactField/ContactField';
import ContactButton from './components/ContactButton/ContactButton';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        {/* Name field */}
        <ContactField
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <ContactField
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <ContactField
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          /* This should be written like 'textarea' */
          textarea={true}
          value={this.state.message}
        />
        {/* Submit button */}
        <ContactButton
          email="kgadams93@gmail.com"
          formValues={this.state}
        />
      </div>
    );
  }
}

export default Form;