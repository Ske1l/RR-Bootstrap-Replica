import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import instaCartLogo from './instacart-logo.svg'
import splash from './splash-wide.webp'
import styled from "styled-components"

const Splash = styled.div`
width: 100vw;
height: 100vh;
background-repeat:no-repeat;
background-image: url(${splash})
`
const RedContainer = styled(Container)`
margin-top: 3em;
font-size: 2em;
color:blue
`
const BlueContainer = styled(Container)`
margin-top: 3em;
font-size: 2em;
color:red
`

const ComplaintContainer = styled(Container)`
margin-top: 3em;
font-size: 3em;
color: magenta
`


function App() {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed='top'>
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
          <img src={instaCartLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Splash>
        <Container>
          <Row>
            <Col>
              <h1>Welcome to the store</h1>
            </Col>
          </Row>
          <Row>
            <Col>Stuff</Col>
            <Col>More Stuff</Col>
            <Col>You're not gonna believe this</Col>
          </Row>
          <Row>
            <Col>
              <RedContainer> This Should be Red</RedContainer>
            </Col>
            <Col>
              <BlueContainer>This should be Blue</BlueContainer>
            </Col>
            <Col>
              <ComplaintContainer>BLAKE! Quit messing with the colors.</ComplaintContainer>
            </Col>
          </Row>
        </Container>
      </Splash>
    </>
  );
}

export default App;
