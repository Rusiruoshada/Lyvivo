import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartBadge from './CartBadge.tsx';

const BottomNav = () => {
  const navLinks = {
    dropDown: ['All', 'Grocery', 'Pharmacy', 'Food', 'Electronic'],
    navLinks: ['Home', 'FAQ', 'About Us', 'Contact Us'],
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='sticky top-0 z-10 bg-white shadow-md drop-shadow-sm'
    >
      <Container>
        <Navbar.Brand
          href='/'
          style={{
            fontWeight: '700',
            color: 'var(--primaryColor)',
            fontSize: '2rem',
          }}
        >
          Lyvivo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='flex justify-end'
        >
          <Nav className='flex justify-end'>
            <NavDropdown
              title='Categories'
              id='collapsible-nav-dropdown'
              className='border rounded-md px-3'
            >
              {navLinks.dropDown.map((dropDownItem) => (
                <NavDropdown.Item
                  key={dropDownItem}
                  onClick={() => alert({ dropDownItem })}
                >
                  {dropDownItem}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {navLinks.navLinks.map((link) =>(<Nav.Link
              style={{}}
              className='hover:font-medium hover:text-[var(--primary)] hover:border  text-gray-400  transition-all duration-500'
              href={'/'+ link.toLowerCase()}
            >
              {link}
            </Nav.Link>))}
            
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href='#deets'>
            <CartBadge />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomNav;
