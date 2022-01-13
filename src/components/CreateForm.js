import React from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";

const CreateForm = () => {
  const { TextArea } = Input;

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  return (
    <div>
      <Row justify="center">
        <Col span={6}>
          <Form
            layout={"vertical"}
            name="create"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Account Name"
              name="accountname"
              rules={[{ required: true, message: "Please input name!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Please input company!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="User Name"
              name="username"
              rules={[{ required: true, message: "Please input user name!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input password!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              label="Tag"
              name="tag"
              rules={[{ required: true, message: "Please input tag!" }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <TextArea
                showCount
                maxLength={100}
                style={{ height: 120 }}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
              >
                CREATE
              </Button>
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
              >
                CLEAR
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CreateForm;
