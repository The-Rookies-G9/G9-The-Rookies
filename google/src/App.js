import './App.css';
import { Container, Nav, Col, Navbar, Row, Button, NavDropdown, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoRookies from './Assets/images/LogoRookies.png'
import firebase from 'firebase/compat/app';
import react, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect  } from "firebase/auth";
import 'firebase/auth';
import {CLIENT_ID, token, gapi} from "google-auth-library";


const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);

function onSuccess(googleUser) {
  console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
  console.log(error);
}
function renderButton() {
  gapi.signin2.render('my-signin2', {
    'scope': 'profile email',
    'width': 240,
    'height': 50,
    'longtitle': true,
    'theme': 'dark',
    'onsuccess': onSuccess,
    'onfailure': onFailure
  });
}



const provider = new GoogleAuthProvider();

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

<><a href="#" onclick="signOut();">Sign out</a><script>
  function signOut() { }
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {console.log('User signed out.')};
  });
  }
</script></>



  
function App() {
  return (
<Navbar collapseOnSelect expand="lg" className="ColorNavBar" variant="dark">
  <Container>
  <Navbar.Brand href="#home">
      <img
        src={LogoRookies}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt=""
      />
    </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#sales"><h5>Ventas</h5></Nav.Link>
      <Nav.Link href="#stocks"><h5>Inventario</h5></Nav.Link>
      <NavDropdown title= <h5>Usuario</h5> id="collasible-nav-dropdown">
        <NavDropdown.Item href="#administrator"><h6>Administrador</h6></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#salesman"><h6>Vendedor</h6></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#index"><h5>Inicio</h5></Nav.Link>
      <Nav.Link eventKey={2} href="#back">
      <h5>Volver</h5>
      </Nav.Link>
      <Navbar.Brand href="#signin">
      <div id="g_id_onload"
         data-client_id="663883928009-htpqqnqu74irl4334peh07b6lve7vj96.apps.googleusercontent.com"
         data-login_uri="https://localhost:3000"
         data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
      <div class="g_id_signout"><h6>Cerrar Sesión</h6></div>
      </Navbar.Brand>
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>
  );

  




}


export default App;