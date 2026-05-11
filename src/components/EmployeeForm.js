import React from "react";
import './EmployeeForm.css';

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      title: "",
      department: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      department: this.state.department
    };

    this.props.addEmployee(newEmployee);

    this.setState({
      name: "",
      email: "",
      title: "",
      department: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>New Employee Form</h2>

          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            name="title"
            placeholder="Job Title"
            value={this.state.title}
            onChange={this.handleChange}
          />

          <input
            name="department"
            placeholder="Department"
            value={this.state.department}
            onChange={this.handleChange}
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;