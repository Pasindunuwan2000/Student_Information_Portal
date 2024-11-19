import Table from "react-bootstrap/Table";

export default function Profile(props) {
  const { student } = props;

  return (
    <>
      <div className="profile-container">
        <div className="profile-image-section">
          <img
            className="profile-image"
            src={require("../assets/profilepic/" + student.profilePic)}
            alt="Profile"
          />
        </div>
        <div className="profile-details-section">
          <Table responsive>
            <tbody>
              <tr>
                <td>ID: {student.studentId}</td>
              </tr>
              <tr>
                <td>
                  Full Name: {student.firstName + " " + student.lastName}
                </td>
              </tr>
              <tr>
                <td>Age: {student.age}</td>
              </tr>
              <tr>
                <td>Course: {student.course}</td>
              </tr>
              <tr>
                <td>Address: {student.address.country}</td>
              </tr>
              <tr>
                <td>Skills: {student.skills}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
