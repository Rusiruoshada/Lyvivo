import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  InputNumber,
} from 'antd';

const ContactPageForm:React.FC = () => {
  

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };
    
    const [form] = Form.useForm();
  
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
    };
    
  return (
    <Form
      {...formItemLayout}
      layout='vertical'
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      
    >
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 '>
      <Form.Item
        name="First Name"
        label="First Name"
        rules={[{ required: true, message: 'Please input your First Name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Last Name"
        label="Last Name"
        rules={[{ required: true, message: 'Please input your Last Name!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Address"
        label="Address"
        rules={[{ required: true, message: 'Please input your Address!', whitespace: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Contact Number"
        label="Contact Number"
        rules={[{ required: true, message: 'Please input your Contact Number!', whitespace: true }]}
      >
        <InputNumber className='w-full' />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      </div>

      <Form.Item
        name="Message"
        label="Message"
        rules={[{ required: true, message: 'Please input Message' }]}
      >
        <Input.TextArea showCount maxLength={1000} />
      </Form.Item>

        {/* add robot capture thin here */}

      <Form.Item className=''>
        <Button type="primary" className='bg-[var(--primaryColor)] w-full sm:w-full lg:w-fit shadow-md' htmlType="submit">
          Submit Feedback
        </Button>
      </Form.Item>
    </Form>
  )
}


export default ContactPageForm;