import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Table, Button } from "react-bootstrap";
import YodlrAPI from "../api/api";
function Admin() {
  const [users, setUsers] = useState([[]]);

  useEffect(() => {
    async function getUsers() {
      setUsers(await YodlrAPI.request("users"));
    }
    getUsers();
  }, []);
  console.log(users);
  return (
    //
    <>
      <Container fluid className='px-5 pt-3'>
        <h1 className='slide-in'>Users</h1>
        {/* {loading ? (
        <Loader />
      ) : error ? (
        toast(`${error}`, { type: "error" })
      ) : ( */}
        <Table bordered hover responsive className='table-sm'>
          <thead>
            <tr className='bg-black text-light'>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>STATE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className='align-middle'>
                <td>{user.id}</td>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td className='text-center'>
                  {user.state === "active" ? (
                    <i className='fas fa-check' style={{ color: "green" }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: "red" }}></i>
                  )}
                </td>
                <td>
                  {/* <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm edit m-1'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    className='btn-sm trash m-1'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Admin;
