import React from "react";

class EmployeeList extends React.Component {
  render() {
    return (
      <div>
        <h2>Employee List</h2>

        <ul>
          {this.props.employees.map((emp, index) => (
            <li key={index}>
              <strong>{emp.name}</strong><br />
              Email: {emp.email}<br />
              Title: {emp.title}<br />
              Department: {emp.department}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeList;