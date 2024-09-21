import React from 'react';
import { Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

interface LoginProps {
  isModalOpen: boolean;
  onCancel: any;
}

const Login: React.FC<LoginProps> = ({ isModalOpen, onCancel }) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Modal
      width={1000}
      open={isModalOpen}
      onCancel={onCancel}
      className='p-0'
      closable={false}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
    >
      <div className='flex flex-row p-4'>
        <div className='flex flex-col'>
          <h1 className='text-4xl font-bold flex flex-col text-[var(--primaryColor)]'>
            Login
            <span className='h-1 w-14 my-1 bg-[var(--primaryColor)] rounded-full'></span>
          </h1>

          <Form
            name='login'
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
          >
            <Form.Item
              name='username'
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder='Username' />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type='password'
                placeholder='Password'
                
              />
            </Form.Item>
            <Form.Item>
              <Flex justify='space-between' align='center'>
                <a href=''>Forgot password</a>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type='primary' className='!bg-[var(--primaryColor)]'  htmlType='submit'>
                Log in
              </Button>
              or <a href=''>Register now!</a>
            </Form.Item>
          </Form>
        </div>
        <div></div>
      </div>
    </Modal>
  );
};

export default Login;
