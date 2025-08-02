import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { useAuth } from "../../../../Context/AuthContext";
import { format } from "date-fns";
import userServicess from "../../../../services/user.service";

const UserList = () => {
  const [eachUser, setEachUser] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { user } = useAuth();
  const token = user ? user.user_token : null;

  useEffect(() => {
    const allUsers = userServicess.getAllUser(token);

    allUsers
      .then((res) => {
        if (!res.ok) {
          setApiError(true);
          if (res.status === 401) {
            setApiErrorMessage("Please log in again.");
          } else if (res.status === 403) {
            setApiErrorMessage("You are not authorized to view this page.");
          } else {
            setApiErrorMessage("Please try again later.");
          }
          return; // Exit if there's an error
        }
        return res.json();
      })
      .then((data) => {
        if (data.data && data.data.length !== 0) {
          setEachUser(data.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>Users</h2>
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>First Name</th>
                  <th>Father Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  <th>Added Date</th>
                  <th>Phone</th>
                  <th>Edit/Delete</th>
                </tr>
              </thead>
              <tbody>
                {eachUser.map((user) => {
                  const dateValue = new Date(user.created_at); // Parse the date for each user
                  const formattedDate = isNaN(dateValue)
                    ? "Invalid Date"
                    : format(dateValue, "dd MM yyyy |kk:mm");

                  return (
                    <tr key={user.user_id}>
                      <td>{user.user_id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.father_name}</td>
                      <td>{user.role}</td>
                      <td>{user.email}</td>
                      <td>{formattedDate}</td> {/* Use formatted date here */}
                      <td>{user.phone_number}</td>
                      <td>
                        <div className="edit-delete-icons">edit | delete</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </section>
      )}
    </>
  );
};

export default UserList;
