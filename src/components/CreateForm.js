import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";

const CreateForm = (props) => {
  const { TextArea } = Input;
  const formRef = React.createRef();
  const bill = props.bill;
  const defaultBill = {
    accountName: 'default', company: '',
    username: '', password: '', 
    tags: [''], description: ''
  };

  useEffect(() => {
    renderBill();
  })

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const onReset = () => {
    formRef.current.resetFields();
  };

  const renderBill = () => {
    if(bill !== null && bill !== undefined) {
      if(formRef.current !== null) {
        formRef.current.setFieldsValue({
          accountName: bill.accountName,
          company: bill.company,
          userName: bill.userName,
          password: bill.password,
          tags: bill.tags,
          description: bill.description
        });
      }
    }
  };

  return(
    <div>
      <Row justify="center">
        <Col span={6}>
          <Form
            layout={"vertical"}
            name="create"
            ref={formRef}
            // initialValues={{...values}}
            
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Account Name"
              name="accountName"
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
              name="userName"
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
              name="tags"
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
                onClick={onReset}
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
