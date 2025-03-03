import React, { useState } from "react";
import { Button, Flex, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import openNotification from "../../../hooks/notification.ts";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import decodeJWT from "../../../hooks/decodeJWT.ts";

const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [userExist, setUserExist] = useState<{
    code?: number | null;
    message?: string;
    userExist: boolean;
  }>({ code: null, message: "", userExist: false });
  const [inputFocus, setInputFocus] = useState(true);

  const onFinish = async (formData: any) => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        ...formData,
      });
      const data = await response.data;
      localStorage.setItem("tokenIsAdmin", data.token);
      form.resetFields();
      const token = localStorage.getItem("tokenIsAdmin");
      const isRightUser = decodeJWT(token!);
      if (isRightUser.role === "user") {
        localStorage.removeItem("tokenIsAdmin");
        localStorage.setItem("tokenUser", data.token);
        navigate("/");
        return;
      }
      if (token) {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      setUserExist({
        code: error?.status,
        message: error?.response?.data?.message,
        userExist: false,
      });
      setInputFocus(false);
    }
    form.resetFields();
  };

  const onFocusInput = () => {
    setInputFocus(true);
  };

  return (
    <div className="bg-[var(--adminPrimaryColor)] h-screen flex justify-center items-center">
      <div className="w-1/3 flex h-auto bg-white justify-center rounded-lg shadow-md ">
        <Form
          form={form}
          name="adminLogin"
          initialValues={{ username: "", password: "" }}
          onFinish={onFinish}
          className="p-30"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please Enter your Username!",
                type: "email",
                whitespace: true,
              },
            ]}
            validateDebounce={1000}
            className="!mb-6"
          >
            <Input
              name="username"
              id="username"
              prefix={<UserOutlined />}
              placeholder={"UserName"}
              type="email"
              size="large"
              className="gap-1"
              onFocus={onFocusInput}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please Enter your Password!" },
              {
                whitespace: true,
                message: "Your Password has only spaces, try using characters!",
              },
            ]}
            validateDebounce={1000}
            className="!mb-0"
            id="password"
          >
            <Input.Password
              name="password"
              id="password"
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              size="large"
              className="gap-1"
              onFocus={onFocusInput}
            />
          </Form.Item>
          {!inputFocus && (
            <div>
              <p className="text-red-400">{userExist.message || ""}</p>
            </div>
          )}
          <Form.Item>
            <Flex justify="end" align="center">
              <Button type="link" className="text-gray-400 p-0">
                Forgot password?
              </Button>
            </Flex>
          </Form.Item>
          <Form.Item htmlFor="submit" className="mb-0">
            <Button
              block
              type="primary"
              className={`!bg-[var(--adminPrimaryColor)] disabled:!bg-gray-100 text-white font-bold`}
              htmlType="submit"
              size="large"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AdminLogin;
