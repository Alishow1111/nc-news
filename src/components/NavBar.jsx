import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { UserContext } from "../contexts/UserContext";
import { useContext} from "react";
import { fetchTopics } from './utils/api';

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetchTopics().then((response) => {
      setTopics(response);
      setLoading(false);
    })
  }, [])


  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              {topics.map((topic) => {
                return (
                  <LinkContainer to={`/articlesByTopic/${topic.slug}`} key={topic.slug}>
                    <NavDropdown.Item>
                    {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
                    </NavDropdown.Item>
                  </LinkContainer>
                )
              })}
            </NavDropdown>
            <LinkContainer to="/profiles">
              <Nav.Link>Profiles</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {currentUser === "" ? "Not Logged In" : `Logged in as ${currentUser.username}`}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
