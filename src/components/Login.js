import React from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "../App.css";

const Login = () => {
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
        <Row justify="center">
            <Col span={6}>
                <Form
                    layout={'vertical'}
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                        >
                        <Input size="large" prefix={<UserOutlined />}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                        >
                        <Input.Password size="large" prefix={<LockOutlined />}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    </div>
  );
};

export default Login;
