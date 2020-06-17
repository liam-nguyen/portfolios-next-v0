import { useState } from 'react';
import BootstrapLink from './BootstrapLink';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color='transparent'
        dark
        expand='md'
        className='port-navbar port-default absolute'>
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
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/blog' title='Blog' />
            </NavItem>
            <NavItem className='port-navbar-item'>
              <BootstrapLink route='/cv' title='CV' />
            </NavItem>

            {/* <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
