import React from "react";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      title: "",
      department: "",
      employees: []
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("employees");
    if (data) {
      this.setState({ employees: JSON.parse(data) });
    }
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

    const updatedEmployees = [
      ...this.state.employees,
      newEmployee
    ];

    this.setState({
      employees: updatedEmployees,
      name: "",
      email: "",
      title: "",
      department: ""
    });

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    console.log(updatedEmployees);
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

          <button type="submit">
            Add Employee
          </button>
        </form>

        <h3>Employee List</h3>
        <ul>
          {this.state.employees.map((emp, index) => (
            <li key={index}>
              {emp.name} - {emp.title} - {emp.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeForm;