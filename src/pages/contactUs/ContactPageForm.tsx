import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { selectOptionsContactPage } from './contactUsPageDropdownOptions.ts';
import axios from 'axios';

interface ContactPageFormProps {
  dropdownSelect: string;
}

const ContactPageForm: React.FC<ContactPageFormProps> = ({
  dropdownSelect,
}) => {

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
  const [disable, setDisable] = useState(false);

  const onFinish = async (values: any) => {
    console.log('Form topic: ', dropdownSelect);
    console.log('Received values of form: ', values);

    // send form data to the backend
    try {
      const response = await axios.post('http://localhost:5000/api/send-email', {
          category: dropdownSelect,
          ...values,
      })
      const data = response.data
      console.log(data)
      form.resetFields();
      setDisable(true);
    } catch (error) {
      console.log('error sending email',error)
      setDisable(false);
    }

  };

 

  
  return (
    <Form
      {...formItemLayout}
      layout='vertical'
      form={form}
      name={`${dropdownSelect}`}
      onFinish={onFinish}
      scrollToFirstError
      className='mt-8'
      disabled={disable}
    >
      <div>
        <Form.Item
          name={`selectOptions ${dropdownSelect}`}
          label={`Category`}
          rules={[
            {
              required: true,
              message:'Please select a topic'
            }
          ]}
          className='w-full sm:w-full md:w-1/2 lg:!w-1/4'
          hasFeedback
        >
          <Select
            showSearch
            placeholder='Select a Category'
            optionFilterProp='label'
            
            options={dropdownSelect==='Comments'?selectOptionsContactPage[0]:selectOptionsContactPage[1]}
          />
        </Form.Item>
      </div>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-3 '>
        <Form.Item
          name='First Name'
          label='First Name'
          rules={[
            {
              required: true,
              message: 'Please input your First Name!',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='Last Name'
          label='Last Name'
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='Address'
          label='Address'
          rules={[
            {
              required: true,
              message: 'Please input your Address!',
              whitespace: true,
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='Contact Number'
          label='Contact Number'
          rules={[
            {
              required: true,
              message: 'Please input your Contact Number!',
                            
            },
          ]}
          validateDebounce={800}
          hasFeedback
        >
          <InputNumber className='w-full' prefix={<p>+94</p>} minLength={9} maxLength={10} />
        </Form.Item>

        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not a valid E-mail!',
              pattern:/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
      </div>

      <Form.Item
        name='Message'
        label='Message'
        rules={[{ required: true, message: 'Please input a Message' }]}
        hasFeedback
      >
        <Input.TextArea showCount maxLength={1000} />
      </Form.Item>

      {/* add robot capture thin here */}
      <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 sm:gap-2 md:gap-3 lg:gap-3'>  
      <Form.Item className=''>
        <Button
          type='primary'
          className='bg-[var(--primaryColor)] w-full sm:w-full md:!w-fit lg:!w-fit shadow-md'
          htmlType='submit'
        >
          Submit Feedback
        </Button>
      </Form.Item>
      <Form.Item>
        <Button
          type='default'
          className='bg-transparent border-[var(--primaryColor)] text-[var(--primaryColor)] w-full sm:w-full md:!w-fit lg:!w-fit shadow-md'
            htmlType='reset'
            disabled={false}
            onClick={()=> {setDisable(false)}}
        >
          Reset
        </Button>
      </Form.Item>
      </div>
    </Form>
  );
};

export default ContactPageForm;
