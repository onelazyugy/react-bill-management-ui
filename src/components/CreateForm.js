import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import BillService from "../services/bill-services";
import { render } from "@testing-library/react";

const CreateForm = (props) => {
  const { TextArea } = Input;
  const bill = props.bill;
  const defaultBill = {
    accountName: 'default', company: '',
    username: '', password: '', 
    tags: [''], description: ''
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const onClearClick = () => {

  };

  const renderBill = () => {
    if(bill !== null) {
      //from edit route
      console.log('bill: ', bill.accountName);
      return <p>{bill.accountName}</p>;
    } else {
      //from create route
      console.log('defaultBill: ', defaultBill.accountName);
      return <p>{defaultBill.accountName}</p>;
    }
  };

  return(
    <div>
      bill: {renderBill()}
      <Row justify="center">
        <Col span={6}>
          <Form
            layout={"vertical"}
            name="create"
            // initialValues={{...values}}
            
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
                onClick={onClearClick}
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
