import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const CreateForm = (props) => {
  const { TextArea } = Input;
  const formRef = React.createRef();
  const bill = props.bill;
  const defaultBill = {
    accountName: 'default', company: '',
    username: '', password: '', 
    tags: [''], description: ''
  };
  const [createBtnDisabled, setCreateBtnDisabled] = useState(true);

  useEffect(() => {
    if(formRef.current) {
      if(!formRef.current.isFieldsTouched()) {
        renderBill();
      }
    }
  });

  const onFinish = (values) => {
    props.onUpdate(values);
  };

  const onChange = () => {
    const accountName = formRef.current.getFieldValue('accountName');
    const company = formRef.current.getFieldValue('company');
    const userName = formRef.current.getFieldValue('userName');
    const password = formRef.current.getFieldValue('password');
    const tags = formRef.current.getFieldValue('tags');
    if((accountName !== '' && accountName !== undefined) && 
        (company !== '' && company !== undefined) && 
        (userName !== '' && userName !== undefined) && 
        (password !== '' && password !== undefined) && 
        (tags !== '' && tags !== undefined)) {
      setCreateBtnDisabled(false)
    } else {
      setCreateBtnDisabled(true)
    }
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
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Account Name"
              name="accountName"
              rules={[{ required: true, message: "Please input name!" }]}
            >
              <Input size="large" placeholder="account name" onChange={onChange}/>
            </Form.Item>

            <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Please input company!" }]}
            >
              <Input size="large" placeholder="company" onChange={onChange}/>
            </Form.Item>

            <Form.Item
              label="User Name"
              name="userName"
              rules={[{ required: true, message: "Please input user name!" }]}
            >
              <Input size="large" placeholder="username" onChange={onChange}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input password!" }]}
            >
              <Input.Password
                size="large"
                placeholder="password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={onChange}
              />
            </Form.Item>

            <Form.Item
              label="Tag"
              name="tags"
              rules={[{ required: true, message: "Please input tag!" }]}
            >
              <Input size="large" placeholder="tags" onChange={onChange} />
            </Form.Item>

            <Form.Item label="Description" name="description">
              <TextArea
                showCount
                maxLength={100}
                style={{ height: 120 }}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
                disabled={createBtnDisabled}
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
