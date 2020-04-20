import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
          <Link className="navbar-brand" to="/">reactstrap</Link>
            <NavbarToggler onClick={toggle} className="d-none"/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {/* <NavItem>
                        <Link className="nav-link" to="/register">Register</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/users">Users</Link>
                    </NavItem> */}
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
}

export default Header;