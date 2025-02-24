import React from 'react'
import Card from '../Cards/Card.tsx'
import { Form, Input, Modal, Select } from 'antd'

interface AddNewProductProps {
  open: boolean;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ open }) => {

  const [form] = Form.useForm();
  const categoryOptions = [
    { value: "food", label: "Food" },
    { value: "grocery", label: "Grocery" },
    { value: "pharmacy", label: "Pharmacy" },
    { value: "electronics", label: "Electronics" },
  ];

   const statusOption = [
     { value: "active", label: "Active" },
     { value: "out of order", label: "Out of Order" },
   ];

  return (
    <Modal open={open} closable={false} okType="primary" width={600}>
      <Form
        form={form}
        className="p-0 gap-y-4"
        layout="inline"
        name="add new product form"
        size="middle"
        rootClassName="!w-full "
      >
        <div className="gap-3 !w-full grid grid-cols-2">
          <Form.Item
            name={`categoryOptions`}
            label={`Category`}
            rules={[
              {
                required: true,
                message: "Please select a category",
              },
            ]}
            hasFeedback
          >
            <Select
              showSearch
              placeholder="Select a Category"
              optionFilterProp="label"
              options={categoryOptions}
            />
          </Form.Item>
          <Form.Item
            name={`statusOptions`}
            label={`Status`}
            rules={[
              {
                required: true,
                message: "Please select a status",
              },
            ]}
            hasFeedback
          >
            <Select
              showSearch
              placeholder="Select a Status"
              optionFilterProp="label"
              options={statusOption}
            />
          </Form.Item>
        </div>
        <Form.Item
          name={`productName`}
          label={`Product Name`}
          rules={[
            {
              required: true,
              message: "Please enter a Product Name",
            },
          ]}
          hasFeedback
          className='w-full'
        >
          <Input placeholder='Product Name' variant='outlined'  />
        </Form.Item>
        <Form.Item
          name='description'
          label='Description'
          rules={[{ required: true, message: 'Please input a Description' }]}
          hasFeedback
          className='w-full'
        >
          <Input.TextArea showCount maxLength={300} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewProduct