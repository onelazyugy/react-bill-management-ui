import React, { useEffect, useState } from "react";
import { Form, Input, Button, Row, Col, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const CreateForm = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const {bill} = props;
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
    if(bill !== null && bill !== undefined) {
      if(form !== null) {
        console.log('createBtnDisabled: ', createBtnDisabled);
        const {accountName, company, userName, password, tags, description} = bill;
        form.setFieldsValue({
          accountName,
          company,
          userName,
          password,
          tags,
          description
        });
      }
    }
  };

  const onFinish = async (billValue) => {
    try {
      console.log(billValue);
      setStatus('submitting...');
      console.log(bill);
      let {tags} = billValue;
      tags = tags.split(',');
      if(bill === undefined) {
        billValue = {...billValue, tags: tags, key: null};
      } else {
        billValue = {...billValue, tags: tags, key: bill.key};
      }
      const response = await props.onFinish(billValue);
      console.log('response from form: ', response);
      
      if(response.status === 201) {
          setStatus('created success...');
      } else if(response.status === 200) {
        setStatus('updated success...');
      } else {
        setStatus(`error: ${response.status}`);
      }
    } catch(error) {
      console.error(error.response);
      setStatus(`error: ${error.response.data.status.message}`);
    }
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
          {status}
        </Col>
      </Row>
    </div >
  );
};

export default CreateForm;


