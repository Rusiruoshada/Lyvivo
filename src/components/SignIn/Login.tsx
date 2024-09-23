import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, Image, Modal } from 'antd';

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

  return (
    <Modal
      width={1000}
      open={isModalOpen}
      onCancel={onCancel}
      className='[&>div]:!p-0'
      // rootClassName='!p-0'
      closable={false}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
      <div className='flex flex-row gap-3'>
        <div className='flex flex-col basis-1/2 py-10 pl-10 pr-0'>
          <div className='flex flex-col mb-8'>
            <h1 className='text-4xl font-bold text-[var(--primaryColor)]'>
              Login
            </h1>
            <span className='h-1 w-14 my-1 bg-[var(--primaryColor)] rounded-full'></span>
          </div>

          <Form
            name='login'
            initialValues={{ username: '', password: '' }}
            onFinish={onFinish}
            className='w-full'
          >
            <div className='relative mb-6'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  usernameFocused
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                UserName
              </label>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Username!',
                    type: 'email',
                    whitespace: true,
                  },
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <Input
                  name='username'
                  id='username'
                  prefix={<UserOutlined />}
                  placeholder={`${usernameFocused ? '' : 'UserName'}`}
                  type='email'
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                />
              </Form.Item>
            </div>
            <div className='relative mt-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  passwordFocused || form.getFieldValue('password')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                Password
              </label>
              <Form.Item
                name='password'
                rules={[
                  { required: true, message: 'Please Enter your Password!' },
                  {
                    whitespace: true,
                    message:
                      'Your Password has only spaces, try using characters!',
                  },
                  {
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      'Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character!',
                  },
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
                id='password'
              >
                <Input.Password
                  name='password'
                  id='password'
                  prefix={<LockOutlined />}
                  type='password'
                  placeholder={`${
                    passwordFocused || form.getFieldValue('password')
                      ? ''
                      : 'Password'
                  }`}
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Flex justify='end' align='center'>
                <Button type='link' className='text-gray-400 p-0'>
                  Forgot password?
                </Button>
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
            </Form.Item>
          </Form>
          <div className='flex flex-row gap-2'>
            <p className='!text-[15px]'>Don't have an account? </p>
            <Button
              type='link'
              className='p-0 h-fit font-medium text-gray-600 text-[14px]'
            >
              Sign Up
            </Button>
          </div>
        </div>
        <div className='basis-1/2 p-1 shadow-lg'>
          <div className='h-full text-white relative'>
            <div className='z-50 absolute top-6 text-center'>
              <h2 className='text-5xl mb-2 font-black '>Welcome back!</h2>
              <p className='text-2xl font-semibold mx-auto text-wrap w-[95%]'>
                Welcome to Lyvivo, where exceptional customer care meets top
                product quality!
              </p>
            </div>

            <div className='h-full relative'>
              <div className='absolute top-0 bottom-0 left-0 right-0 h-full !z-[1] opacity-40 rounded-md bg-black'/>
              <div
                style={{
                  backgroundImage: "url('/images/login/login image1.jpeg')",
                }}
                className='absolute top-0 bottom-0 right-0 left-0 h-full w-full bg-cover bg-center z-0 opacity-100 rounded-md'
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Login;
