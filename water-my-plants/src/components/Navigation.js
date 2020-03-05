import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../img/logo-earth.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const newId = localStorage.getItem('id')
  console.log('this is the id from local storage', newId);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <a href = "https://build-week-water-my-plants3.github.io/marketing/">
        <img className='logo-img' src={logo}/>
        </a>
        <NavbarBrand className='WMP-text' >Water My Plants</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Login</NavLink>
            </NavItem>
            <NavItem>
              

              <NavLink href="/register">Sign Up</NavLink>

            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                My Plants
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href={`/users/${newId}/plants`}>
                  List of My Plants
                </DropdownItem>
                <DropdownItem href={`/users/${newId}/plantform`}>
                  Add New Plant
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className='WMP-text'>Always Reminding You To Water Your Plants!</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;