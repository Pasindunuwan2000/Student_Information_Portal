import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Profile from "./profile";
import { useState } from "react";

export default function TableCreate(props) {
  const [selectedStudent, setSelectedStudent] = useState(props.students[0]);

  return (
    <>
      <div className="table-container">
        <div className="table-section">
          <Table striped bordered>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Course</th>
                <th>Country</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {props.students.map((student, index) => (
                <tr key={index}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.course}</td>
                  <td>{student.address.country}</td>
                  <td>
                    <button onClick={() => setSelectedStudent(student)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="profile-section">
          <Profile student={selectedStudent} />
        </div>
      </div>
    </>
  );
}
