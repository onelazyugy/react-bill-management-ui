import React from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "../App.css";

const Login = () => {
  
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{border: 'solid green'}}>
        <Row>
            <Col span={24}>
                <Row align="center">
                    <Col span={10}>
                        <div style={{border: 'solid blue', padding: '10px'}}>
                            <Form
                                name="login"
                                labelCol={{ span: 5 }}
                                wrapperCol={{ span: 16 }}
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
                                    <Input size="large" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: "Please input your password!" }]}
                                    >
                                    <Input.Password size="large" />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 5, span: 5 }}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  );
};

export default Login;
