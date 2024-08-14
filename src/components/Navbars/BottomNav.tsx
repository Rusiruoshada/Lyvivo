import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartBadge from './CartBadge.tsx';
import SearchBar from '../SearchBar/SearchBar.tsx';
import DropDown from '../UI/DropDown.tsx';
import categories from '../HomeShopByCategory/exportCategoryObject.tsx';
import CartDrawer from '../Cart/CartDrawer.tsx';

interface navLinks {
  dropDown: string[];
  navLinks: string[];
}

const displayRender = (labels: string[]) => labels[labels.length - 1];

const BottomNav: React.FC = () => {
  const navLinks: navLinks = {
    dropDown: ['All', 'Grocery', 'Pharmacy', 'Food', 'Electronic'],
    navLinks: ['Home', 'FAQ', 'About Us', 'Contact Us'],
  };

  const [isOpen, setIsOpen] = useState(false);

  const onCartOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='sticky top-0 bottom-auto left-0 right-0 mb-[35px] bg-white shadow-md drop-shadow-sm !z-[100]'
      sticky='top'
      style={{ justifyContent: 'center' }}
    >
      <Container style={{ padding: 0, margin: '0 2.5rem' }}>
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
        <div className='flex gap-3 relative'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className=' flex justify-end absolute lg:relative top-[3rem] lg:top-0 right-3 lg:right-0 left-auto bg-white lg:bg-transparent shadow-md lg:shadow-none lg:p-0  '
            style={{ padding: '0.5rem', zIndex: 10 }}
          >
            <Nav className='flex justify-end '>
              <DropDown
                categories={categories}
                displayRender={displayRender}
                placeholderName='Categories'
              />
              {navLinks.navLinks.map((link) => (
                <Nav.Link
                  className='hover:font-medium hover:text-[var(--primaryColor)] hover:border  text-gray-400  transition-all duration-500'
                  href={'/' + link.toLowerCase()}
                  key={link}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link style={{ display: 'flex', alignItems: 'center' }}>
              <CartBadge onOpenCart={onCartOpen} />
              <CartDrawer openCart={isOpen} onOpenCart={onCartOpen} />
            </Nav.Link>
          </Nav>
        </div>
      </Container>
      <SearchBar />
    </Navbar>
  );
};

export default BottomNav;
