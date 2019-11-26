import React from 'react';
import "./FormField.scss";

class FormikCloudForm extends React.Component {
  handleSubmit = () => {
    fetch('https://api.formik.com/submit/email-form/contact-form', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="Tophalf">
          <div className="InputDiv">
            <p className="control has-icons-left">
              <input
                className="input is-hovered"
                placeholder= "enter your name" 
                type="text" 
                name="name" 
                onChange={this.handleInputChange} 
              />
              <span class="icon is-small is-left">
                <i class="fas fa-pen"></i>
              </span>
            </p>
          </div>
          <div className="InputDiv">
            <p className="control has-icons-left">
              <input 
                className="input is-hovered"
                placeholder= "Enter your email" 
                type="text" 
                name="email" 
                onChange={this.handleInputChange} 
                />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>

        <div className="InputB">
        <p className="control has-icons-left">
          <input 
            className="input textarea is-hovered" 
            placeholder="Enter your message here please" 
            type="text" 
            name="message" 
            onChange={this.handleInputChange} 
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope-open-text"></i>
          </span>
        </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormikCloudForm;

