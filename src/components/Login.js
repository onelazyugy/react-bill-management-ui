import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import "../App.css";
import billmanagement from "../apis/billmanagement";

const Login = () => {
  const initialLoginState = {
    isError: false,
    message: null,
  };
  const [loginMsg, setLoginMsg] = useState(initialLoginState);
  const history = useHistory();

  const onLoginSubmit = async (values) => {
    try {
      const response = await billmanagement.post(
        "/billmgnt/api/v1/login",
        values
      );
      console.log(response.data);
      if (response && response.status === 200) {
        setLoginMsg({ isError: false, message: "success" });
        history.push("/bills");
      } else {
        setLoginMsg({ isError: true, message: "failure" });
      }
    } catch (err) {
      console.error(err);
      const { message } = err.response.data.status;
      setLoginMsg({ isError: true, message: message });
    }
  };

  const onFinish = (values) => {
    onLoginSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Row justify="center">
        <Col span={6}>
          <Form
            layout={"vertical"}
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password size="large" prefix={<LockOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
              >
                LOGIN
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <div>{loginMsg.message}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
