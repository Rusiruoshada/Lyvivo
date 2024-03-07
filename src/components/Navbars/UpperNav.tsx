import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'antd';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalPhone } from 'react-icons/md';

const BasicExample: React.FC  =()=> {
  return (
    <Navbar
      expand='lg'
      className='mx-0 sm:mx-2 md:mx-3 lg:mx-10'
      style={{display:'flex', justifyContent:'end',backgroundColor:'#fff'}}
    >
      <Container className='flex gap-2 ' style={{justifyContent:'end'}}>
        <Nav.Item className='flex items-center gap-1'>
          <MdLocalPhone />
          +94 XX XXX XXXX
        </Nav.Item>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' style={{justifyContent:'end',flexBasis:'none',flexGrow:'0',marginRight:'0'}}>
          
          <Nav style={{marginRight:'0!impotent'}} className='me-auto flex gap-6 items-end  sm:items-end md:items-end lg:items-center'>
            <Nav.Link style={{display:'flex'}} href='/deliveryareas' className='gap-1 items-center '>
              <TbTruckDelivery className='text-2xl' />
              Delivery Areas
            </Nav.Link>
            <Nav.Item>
              <Button
                style={{
                  borderColor: 'var(--primaryColor)',
                  color: 'var(--primaryColor)',
                }}
              >
                Register
              </Button>{' '}
              /<Button style={{color:'var(--primaryColor)'}} type='link'>Login</Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
