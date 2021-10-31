import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./routes/Routes";
import "./assets/css/bootstrap.min.css";
import YodlrAPI from "./api/api";
const App = () => {
  const [users, setUsers] = useState([[]]);

  useEffect(() => {
    async function getUsers() {
      setUsers(await YodlrAPI.request("users"));
    }
    getUsers();
  }, []);

  console.log(users);
  return (
    <>
      <Header />
      <main>
        <Container fluid className='mt-5 pt-5 g-0'>
          <Routes />
          {/* <p>Main</p> */}
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
