import { useState } from 'react';
import BootstrapLink from '../BootstrapLink';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
// import Login from '../Login';
// import Logout from '../Logout';

const Header = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

  return (
    <div>
      <Navbar
        dark
        expand='md'
        className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`}>
        <NavbarBrand className='port-navbar-brand' href='/'>
          Liam Nguyen
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/' title='Home' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/about' title='About' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/portfolios' title='Portfolios' />
            </NavItem>
            {/* <NavItem className='port-navbar-item'>
              <BootstrapLink route='/blogs' title='Blogs' />
            </NavItem> */}
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/cv' title='CV' />
            </NavItem>
            {/* <NavItem className='port-navbar-item'>
              <Login route='/cv' title='CV' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <Logout route='/cv' title='CV' />
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Header.defaultProps = {
  className: '',
};

export default Header;
