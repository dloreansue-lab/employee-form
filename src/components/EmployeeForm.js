import React from 'react';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      department: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>New Employee Form</h2>

        <input name="name" placeholder="Name" onChange={this.handleChange} value={this.state.name} />
        <input name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} />
        <input name="title" placeholder="Job Title" onChange={this.handleChange} value={this.state.title} />
        <input name="department" placeholder="Department" onChange={this.handleChange} value={this.state.department} />

        <button type="submit">Add Employee</button>
      </form>
    );
  }
}

export default EmployeeForm;