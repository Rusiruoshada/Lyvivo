import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import UploadButton from "../UploadButton/UploadButton.tsx";

interface AddNewProductProps {
  open: boolean;
  onOpenModal: any;
  onSubmit: any;
}

const AddNewProduct: React.FC<AddNewProductProps> = ({ open, onOpenModal, onSubmit }) => {
  const [isFoodOrGrocery, setIsFoodOrGrocery] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [form] = Form.useForm();

  const categoryOptions = [
    { value: "food", label: "Food" },
    { value: "grocery", label: "Grocery" },
    { value: "pharmacy", label: "Pharmacy" },
    { value: "electronics", label: "Electronics" },
  ];

  const statusOption = [
    { value: "active", label: "Active" },
    { value: "out of stock", label: "Out of Stocks" },
  ];

  const getCategorySelection = (selectItem: string) => {
    if (
      selectItem === "food" ||
      selectItem === "grocery" ||
      selectItem === "pharmacy"
    ) {
      return setIsFoodOrGrocery(true);
    }
    setIsFoodOrGrocery(false);
  };

  const validateURLS = (urls: string) => {
    const urlRegex = /^https?:\/\/.*$/;
    // return urls.every(url => urlRegex.test(url))
    return urlRegex.test(urls);
  };

  const onUploadClick = () => {
    setShowUpload(!showUpload);
  };

  
  return (
    <Modal
      open={open}
      closable={false}
      width={isFoodOrGrocery ? 800 : 600}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={() => onOpenModal(false)}
    >
      <Form
        form={form}
        className="p-0 gap-y-4"
        layout="inline"
        name="add new product form"
        size="middle"
        rootClassName="!w-full mb-0 "
        onFinish={onSubmit}
        scrollToFirstError
      >
        <div className="w-full">
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
            className="w-full"
          >
            <Input placeholder="Product Name" variant="outlined" allowClear />
          </Form.Item>
        </div>
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
            className="m-0"
          >
            <Select
              showSearch
              onChange={getCategorySelection}
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
            className="m-0"
          >
            <Select
              showSearch
              placeholder="Select a Status"
              optionFilterProp="label"
              options={statusOption}
            />
          </Form.Item>
        </div>

        <div
          className={`grid ${
            isFoodOrGrocery ? "grid-cols-3" : "grid-cols-2"
          } gap-3`}
        >
          <Form.Item
            name={`price`}
            label={`Price`}
            rules={[
              {
                required: true,
                message: "Please enter valid price",
              },
            ]}
            hasFeedback
            className="m-0"
          >
            <Input placeholder="price" variant="outlined" type="number" />
          </Form.Item>
          <Form.Item
            name={`stock`}
            label={`Stocks`}
            rules={[
              {
                required: true,
                message: "Please enter valid input",
              },
            ]}
            hasFeedback
            className="m-0"
          >
            <Input placeholder="Stocks" variant="outlined" type="number" />
          </Form.Item>
          {isFoodOrGrocery && (
            <Form.Item
              name={`Weight`}
              label={`Weight`}
              rules={[
                {
                  required: false,
                  message: "Please enter valid Weight",
                },
              ]}
              hasFeedback
              className="m-0"
            >
              <Input
                placeholder="Weight"
                variant="outlined"
                type="number"
                disabled={!isFoodOrGrocery}
              />
            </Form.Item>
          )}
        </div>
        <div className="w-full">
          <Form.Item
            name={`imageURL`}
            label={`Product Images`}
            rules={[
              {
                required: showUpload ? false : true,
                message: "Please enter a valid URL",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const isItValid = validateURLS(getFieldValue("imageURL"));
                  if (isItValid) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Invalid URL"));
                },
              }),
            ]}
            className="w-full"
          >
            <Input
              placeholder="Product Images"
              variant="outlined"
              type="url"
              disabled={showUpload}
              className={`${showUpload ? "mb-2" : ""}`}
              suffix={
                <Button
                  className="hover:!border-[var(--adminPrimaryColor)] hover:!text-[var(--adminPrimaryColor)]"
                  type="default"
                  onClick={onUploadClick}
                >
                  Upload from device
                </Button>
              }
            />
            {showUpload && (
              <UploadButton
                disable={!showUpload}
                name="upload product images"
                listType="text"
              />
            )}
          </Form.Item>
        </div>
        <div className="w-full mb-3">
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please input a Description" }]}
            className="w-full"
          >
            <Input.TextArea showCount maxLength={300} />
          </Form.Item>
        </div>
        <div className="flex w-full justify-end ">
          <Form.Item className="m-0">
            <div className="flex gap-3">
              <Button
                type="default"
                className="hover:!border-gray-400 hover:!text-gray-700 w-full sm:w-full md:!w-fit lg:!w-fit shadow-md"
                htmlType="submit"
                onClick={()=>onOpenModal(false)}
              >
                Discard
              </Button>
              <Button
                type="primary"
                className="bg-[var(--adminPrimaryColor)] hover:!bg-[var(--adminPrimaryColorDark)] w-full sm:w-full md:!w-fit lg:!w-fit shadow-md"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AddNewProduct;
