import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'antd';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdLocalPhone } from 'react-icons/md';
import Login from '../SignIn/Login.tsx';
import Register from '../SignIn/Register.tsx';

const BasicExample: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState<{register:boolean,login:boolean}>({register:false,login:false});

  const showModal = (event: any): any => {
    const clickButtonInnerText = event.target.innerText;
    if (clickButtonInnerText === 'Register') {
      
      setIsModalOpen({register:true,login:false});
    } else if (clickButtonInnerText === 'Login') {
      
      setIsModalOpen({register:false,login:true});
    }
  };

  const onModalCancel = (value:any) => {
    const getDetailsAboutCloseModal = Object.keys(value);
    
    if (getDetailsAboutCloseModal[0] === 'register') {
      setIsModalOpen({register:false,login:isModalOpen.login});
    } else if (getDetailsAboutCloseModal[0] === 'login') {
      setIsModalOpen({register:isModalOpen.register,login:false});
      
    }
  }

  return (
    <Navbar
      expand='lg'
      className='mx-0 sm:mx-2 md:mx-3 lg:mx-10'
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <Container
        className='flex gap-2 '
        style={{ justifyContent: 'end', padding: 0, margin: '0 2.5rem' }}
      >
        <Nav.Item className='flex items-center gap-1'>
          <MdLocalPhone />
          +94 11 230 3500
        </Nav.Item>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          style={{
            justifyContent: 'end',
            flexBasis: 'none',
            flexGrow: '0',
            marginRight: '0',
          }}
        >
          <Nav
            style={{ marginRight: '0!impotent' }}
            className='me-auto flex gap-6 items-end  sm:items-end md:items-end lg:items-center'
          >
            <Nav.Link
              style={{ display: 'flex' }}
              href='/deliveryareas'
              className='gap-1 items-center '
            >
              <TbTruckDelivery className='text-2xl' />
              Delivery Areas
            </Nav.Link>
            <Nav.Item>
              <Button
                style={{
                  borderColor: 'var(--primaryColor)',
                  color: 'var(--primaryColor)',
                }}
                onClick={showModal}

              >
                Register
              </Button>{' '}
              <Register isModalOpen={isModalOpen.register} onCancel={onModalCancel} />
              /
              <Button onClick={showModal} style={{ color: 'var(--primaryColor)' }} type='link'>
                Login
              </Button>
                <Login isModalOpen={isModalOpen.login} onCancel={onModalCancel} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicExample;
