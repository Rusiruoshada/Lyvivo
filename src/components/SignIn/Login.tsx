import React, { useState } from 'react';
import { Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex } from 'antd';

interface LoginProps {
  isModalOpen: boolean;
  onCancel: any;
}

const Login: React.FC<LoginProps> = ({ isModalOpen, onCancel }) => {

  const [form] = Form.useForm();
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  console.log(form.getFieldValue('username'))

  return (
    <Modal
      width={1000}
      open={isModalOpen}
      // onCancel={onCancel}
      className='p-0'
      closable={false}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
      <div className='flex flex-row '>
        <div className='flex flex-col basis-1/2 p-4'>
          
          <div className='flex flex-col mb-8'>
            <h1 className='text-4xl font-bold text-[var(--primaryColor)]'>
              Login
            </h1>
            <span className='h-1 w-14 my-1 bg-[var(--primaryColor)] rounded-full'></span>
          </div>

          <Form
            name='login'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            className='w-full'
          >
            {/* <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your Username!', type: 'email', whitespace: true },
              ]}
              validateDebounce={1000}
              hasFeedback
            >
              <Input
                suffix={<UserOutlined />}
                placeholder='Username'
                type='email'
                size='large'
                className='!border-0 !border-b-2'
              />
            </Form.Item> */}
             <div className='relative mb-6'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  usernameFocused || form.getFieldValue('username') ? 'visible -translate-y-6 -translate-x-2 scale-100 text-black)] !z-10' : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                UserName
              </label>
              <Form.Item
                name='username'
                rules={[{ required: true, message: 'Please input your Username!', type: 'email', whitespace: true }]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <Input
                  name='username'
                  id='username'
                  suffix={<UserOutlined />}
                  placeholder={`${usernameFocused || form.getFieldValue('username') ?'':'UserName' }`}
                  type='email'
                  size='large'
                  className='!border-0 !border-b-2'
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                />
              </Form.Item>
            </div>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' },
                { whitespace:true, message:'Your Password have only spaces, try using characters!'}
              ]}
              validateDebounce={1000}
              hasFeedback
              className=''
            >
              <Input
                suffix={<LockOutlined />}
                type='password'
                placeholder='Password'
                size='large'
                className='!border-0 !border-b-2'
                name='password'
                id='password'
              />
              
            </Form.Item>
            <Form.Item>
              <Flex justify='space-between' align='center'>
                <a href=''>Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type='primary'
                className={`!bg-[var(--primaryColor)] disabled:!bg-gray-100`}
                htmlType='submit'
                size='large'
                
              >
                Log in
              </Button>
              or <a href=''>Register now!</a>
            </Form.Item>
          </Form>
        </div>
        <div className='basis-1/2'></div>
      </div>
    </Modal>
  );
};

export default Login;
