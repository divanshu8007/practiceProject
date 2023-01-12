import React, { useState } from "react";
import imagePath from "../../constants/imagePath";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function LaunchingPage()


{
const [dropDown, setDropDown] = useState(false)

    return (
        <div style={{alignItems : 'center', justifyContent: "space-between", flex : 1, backgroundColor : '#F5FFFA', flexDirection : 'row',  display: "flex"}}>
      
            <img src={imagePath.txLogo} style={{height : '10%', width: '20%'}}/>
            
<div style={{display : 'flex', flex : 1, width : '100%', justifyContent: 'space-evenly'}}>
    <button style={{borderWidth : 0, backgroundColor : 'transparent'}} onMouseOver={setDropDown(true)}>
        {/* {dropDown &&
        <div style={{position:'absolute', height: "30%", width: "30%", backgroundColor : 'red'}}>

        </div>} */}

    </button>
    

            {/* <NavDropdown id="nav-dropdown-dark-example"  title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown>
            <NavDropdown menuVariant="dark" title= 'Services'></NavDropdown> */}

</div>
            {/* <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
            
        </div>

    )
}