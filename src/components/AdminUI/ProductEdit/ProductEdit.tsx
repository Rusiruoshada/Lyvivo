import { Button, Form, Input, Modal, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface ProductEditProps {
  open: boolean;
  onClose: any;
  productKey: string;
}

const ProductEdit: React.FC<ProductEditProps> = ({
  open,
  onClose,
  productKey,
}) => {
  const [form] = Form.useForm();
  const [productData, setProductData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/productEdit",
          {
            productKey,
          }
        );
        const data = await response.data;
        console.log(data);
        setProductData(data);
      } catch (error) {
        console.log(error, "error from productEdit");
      }
    };
    getData();
  }, [productKey]);

  return (
    <Modal
      open={open}
      closable={false}
      //   width={isFoodOrGrocery ? 800 : 600}
      okButtonProps={{ hidden: true }}
      cancelButtonProps={{ hidden: true }}
      onCancel={() => onClose(false)}
    >
      {/* <Form
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
              name={`weight`}
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
            <div>
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
            </div>
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
                onClick={() => onClose(false)}
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
      </Form> */}
    </Modal>
  );
};

export default ProductEdit;
