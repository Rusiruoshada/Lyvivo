import React, { useState } from 'react';
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  FieldNumberOutlined,
} from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Modal,
  AutoComplete,
  Checkbox,
  InputNumber,
  Select,
} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import axios from 'axios';

interface RegisterProps {
  isModalOpen: boolean;
  onCancel: any;
  onClickOnSignUpOrLoginHandler: any;
}

const Register: React.FC<RegisterProps> = ({
  isModalOpen,
  onCancel,
  onClickOnSignUpOrLoginHandler,
}) => {
  const [form] = Form.useForm();
  const [inputFocused, setInputFocused] = useState({
    mobileNumber: false,
    email: false,
    firstName: false,
    lastName: false,
    password: false,
    confirmPassword: false,
  });
  const [disable,setDisable] = useState(false)

  const onFinish = async (values: any) => {
    console.log('Received values of form: ', values);
    try {
      await axios.post('http://localhost:5000/api/register', {
          ...values,
      })
      console.log('register ',values)
      form.resetFields();
      setDisable(true);
    } catch (error) {
      console.log(error)
      setDisable(false);
    }
    form.resetFields();
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={() => onCancel({ register: false })}
      className='[&>div]:!p-0 w-full sm:!w-full md:!w-full lg:!w-[1200px]'
      closable={false}
      footer={''}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      maskClosable
    >
      <div className='flex flex-row gap-5'>
        <div className='basis-1/2 p-1 shadow-lg'>
          <div className='h-full text-white relative'>
            <div className='z-50 absolute bottom-6 text-center'>
              <h2 className='text-4xl mb-2 font-black '>
                One place for everything!
              </h2>
              <p className='text-2xl font-medium mx-auto text-wrap w-[95%]'>
                Welcome to Lyvivo, where exceptional customer care meets top
                product quality!
              </p>
            </div>

            <div className='h-full relative'>
              <div className='absolute top-0 bottom-0 left-0 right-0 h-full !z-[1] opacity-40 rounded-md bg-black' />
              <div
                style={{
                  backgroundImage: "url('/images/login/login image2.jpeg')",
                }}
                className='absolute top-0 bottom-0 right-1 left-auto h-full w-full bg-cover bg-center z-0 opacity-100 rounded-md scale-[1.03] shadow-lg'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col basis-1/2 py-10 pl-0 pr-10'>
          <div className='flex flex-col mb-8'>
            <h1 className='text-4xl font-bold text-[var(--primaryColor)]'>
              Register
            </h1>
            <span className='h-1 w-24 my-1 bg-[var(--primaryColor)] rounded-full'></span>
          </div>

          <Form
            name='register'
            form={form}
            onFinish={onFinish}
            className='w-full'
            disabled={disable}
          >
            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.mobileNumber ||
                  form.getFieldValue('mobileNumber')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                Mobile Number
              </label>
              <Form.Item
                name='mobileNumber'
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Number!',
                    type: 'number',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (
                        getFieldValue('mobileNumber')?.toString().length === 9
                      ) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Mobile number must be 9 digits!, Try without zero in first.')
                      );
                    },
                  }),
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <InputNumber
                  name='mobileNumber'
                  prefix={<FieldNumberOutlined />}
                  placeholder={`${
                    inputFocused.mobileNumber ||
                    form.getFieldValue('mobileNumber')
                      ? ''
                      : 'Mobile Number'
                  }`}
                  type='tel'
                  size='large'
                  inputMode='tel'
                  minLength={9}
                  maxLength={10}
                  upHandler={false}
                  downHandler={false}
                  className='!border-0 !border-b-2 gap-1 w-full'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      mobileNumber: true,
                    }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      mobileNumber: false,
                    }))
                  }
                />
              </Form.Item>
            </div>
            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.email || form.getFieldValue('email')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                E-mail
              </label>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your email!',
                    type: 'email',
                    whitespace: true,
                  },
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <Input
                  name='email'
                  prefix={<MailOutlined />}
                  placeholder={`${
                    inputFocused.email || form.getFieldValue('email')
                      ? ''
                      : 'E-mail'
                  }`}
                  type='email'
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({ ...prev, email: true }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({ ...prev, email: false }))
                  }
                />
              </Form.Item>
            </div>
            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.firstName || form.getFieldValue('firstName')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                First Name
              </label>
              <Form.Item
                name='firstName'
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Username!',
                    type: 'string',
                    whitespace: true,
                  },
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <Input
                  name='firstName'
                  prefix={<UserOutlined />}
                  placeholder={`${
                    inputFocused.firstName || form.getFieldValue('firstName')
                      ? ''
                      : 'First Name'
                  }`}
                  type='string'
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      firstName: true,
                    }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      firstName: false,
                    }))
                  }
                />
              </Form.Item>
            </div>
            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.lastName || form.getFieldValue('lastName')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                Last Name
              </label>
              <Form.Item
                name='lastName'
                rules={[
                  {
                    required: true,
                    message: 'Please Enter your Username!',
                    type: 'string',
                    whitespace: true,
                  },
                ]}
                validateDebounce={1000}
                hasFeedback
                className='!mb-0'
              >
                <Input
                  name='lastName'
                  prefix={<UserOutlined />}
                  placeholder={`${
                    inputFocused.lastName || form.getFieldValue('lastName')
                      ? ''
                      : 'Last Name'
                  }`}
                  type='string'
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      lastName: true,
                    }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      lastName: false,
                    }))
                  }
                />
              </Form.Item>
            </div>
            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.password || form.getFieldValue('password')
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
              >
                <Input.Password
                  name='password'
                  prefix={<LockOutlined />}
                  type='password'
                  placeholder={`${
                    inputFocused.password || form.getFieldValue('password')
                      ? ''
                      : 'Password'
                  }`}
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      password: true,
                    }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      password: false,
                    }))
                  }
                />
              </Form.Item>
            </div>

            <div className='relative mb-8'>
              <label
                className={`absolute left-3 top-0 -z-30 transition-all duration-200 transform ${
                  inputFocused.confirmPassword ||
                  form.getFieldValue('confirmPassword')
                    ? 'visible -translate-y-6 -translate-x-2 scale-100 text-gray-500 !z-10'
                    : 'translate-y-0 scale-100 -z-30'
                }`}
              >
                Confirm Password
              </label>
              <Form.Item
                name='confirmPassword'
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          'The new password that you entered do not match!'
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  name='confirmPassword'
                  prefix={<LockOutlined />}
                  type='password'
                  placeholder={`${
                    inputFocused.confirmPassword ||
                    form.getFieldValue('confirmPassword')
                      ? ''
                      : 'Confirm Password'
                  }`}
                  size='large'
                  className='!border-0 !border-b-2 gap-1'
                  onFocus={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      confirmPassword: true,
                    }))
                  }
                  onBlur={() =>
                    setInputFocused((prev: any) => ({
                      ...prev,
                      confirmPassword: false,
                    }))
                  }
                />
              </Form.Item>
            </div>

            <Form.Item
              name='agreement'
              valuePropName='checked'
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(new Error('Should accept agreement')),
                },
              ]}
            >
              <Checkbox>
                I have read the <a href=''>agreement</a>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                block
                type='primary'
                className={`!bg-[var(--primaryColor)] disabled:!bg-gray-100 text-white font-bold`}
                htmlType='submit'
                size='large'
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className='flex flex-row gap-2'>
            <p className='!text-[15px]'>Already have an Account? </p>
            <Button
              type='link'
              className='p-0 h-fit font-medium text-gray-600 text-[14px]'
              onClick={() => onClickOnSignUpOrLoginHandler('register')}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Register;
