import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const CreateForm = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const bill = props.bill;
  const [createBtnDisabled, setCreateBtnDisabled] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if(form) {
      if(!form.isFieldsTouched()) {
        renderBill();
      }
    }
  });

  const renderBill = () => {
    console.log(createBtnDisabled);
    if(bill !== null && bill !== undefined) {
      if(form !== null) {
        form.setFieldsValue({
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

  const onFinish = (values) => {
    console.log(values);
    setStatus('submitting...');
    const tags = values.tags.split(',');
    values.tags = tags;
    // const response = await props.onFinish(values);
    // console.log('response from form: ', response);
    
    // if(response.status === 201) {
    //     setStatus('done...');
    // } else {
    //   setStatus('error...');
    // }
  };

  const onReset = () => {
    form.resetFields();
    setCreateBtnDisabled(true)
  };

  const onChange = () => {
    const accountName = form.getFieldValue('accountName');
    const company = form.getFieldValue('company');
    const userName = form.getFieldValue('userName');
    const password = form.getFieldValue('password');
    const tags = form.getFieldValue('tags');
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

  return (
    <div>
      <Row justify="center">
        <Col span={6}>
          <Form layout={"vertical"} form={form} name="control-hooks" onFinish={onFinish} autoComplete="off">
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
                SUBMIT
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
          status: {status}
        </Col>
      </Row>
    </div >
  );
};

export default CreateForm;


