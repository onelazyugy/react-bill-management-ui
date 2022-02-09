import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space, Button, Tooltip, Modal } from "antd";
import {
  DeleteTwoTone,
  EyeTwoTone,
  EditTwoTone,
  ExclamationCircleOutlined,
  CheckOutlined
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BillService from "../services/bill-services";

const Bill = () => {
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(retrieveBills());
  }, []);

  const renderBills = () => {
    const columns = [
      {
        title: "Name",
        dataIndex: "accountName",
      },
      {
        title: "Company",
        dataIndex: "company",
      },
      {
        title: "Actions",
        dataIndex: "",
        render: (text, record) => (
          <Space size="middle">
            <Tooltip title="view credentail">
              <Button
                type="link"
                onClick={() =>
                showViewCredentialModal(record)
                }
              >
                <EyeTwoTone twoToneColor="green" style={{ fontSize: "32px" }} />
              </Button>
            </Tooltip>

            <Tooltip title="edit bill">
              <Button
                type="link"
                onClick={() => navigateToEditBill(record.key)}
              >
                <EditTwoTone
                  twoToneColor="#ea561b"
                  style={{ fontSize: "32px" }}
                />
              </Button>
            </Tooltip>

            <Tooltip title="delete bill">
              <Button type="link" onClick={() => showConfirmationModal(record)}>
                <DeleteTwoTone
                  twoToneColor="#cc0000"
                  style={{ fontSize: "32px" }}
                />
              </Button>
            </Tooltip>
          </Space>
        ),
      },
    ];
    return <Table columns={columns} dataSource={bills} />;
  };

  const newBill = () => {
    history.push("/create");
  };

  const navigateToEditBill = (key) => {
    history.push(`/edit/${key}`);
  };

  const showConfirmationModal = (record) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log("okie");
      },
      onCancel() {
        console.log("cancel");
      },
      content: (
        <p>
          Are you sure you want to delete <b>{record.accountName}</b>?
        </p>
      ),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

  const showViewCredentialModal = async (record) => {
    const response = await BillService.retrieveBillCredentialById(
      record.key
    );
    const { username, password } = response.data;
    Modal.success({
      title: "View Credential",
      icon: <CheckOutlined />,
      onOk() {
        console.log("okie");
      },
      content: <p>{username} | {password}</p>,
      okText: "Close",
    });
  };

  return (
    <div style={{ padding: "5px" }}>
      <div>{renderBills()}</div>
      <div>
        <Button
          type="primary"
          size="large"
          style={{ width: "100%" }}
          onClick={newBill}
        >
          NEW BILL
        </Button>
      </div>
    </div>
  );
};

export default Bill;
