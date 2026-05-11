import React from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("employees");

    if (data) {
      this.setState({
        employees: JSON.parse(data)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.employees !== this.state.employees) {
      localStorage.setItem(
        "employees",
        JSON.stringify(this.state.employees)
      );
    }
  }

  addEmployee = (employee) => {
    this.setState({
      employees: [...this.state.employees, employee]
    });
  };

  render() {
    return (
      <div>
        <h1>Employee Management System</h1>

        <EmployeeForm addEmployee={this.addEmployee} />

        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default App;