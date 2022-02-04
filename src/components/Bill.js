import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space, Button, Tooltip, Modal } from "antd";
import { DeleteTwoTone, EyeTwoTone, EditTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BillService from "../services/bill-services";

const Bill = () => {
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentModalState, setModalState] = useState({
    isModalVisible: false,
    currentSelectedRecord: null,
    billData: {username: '', password: ''},
  });

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
            <Tooltip title="view details">
              <Button type="link" onClick={() => showModal(record)}>
                <EyeTwoTone twoToneColor="green" style={{ fontSize: "32px" }} />
              </Button>
            </Tooltip>

            <Tooltip title="edit bill">
              <Button type="link" onClick={() => showModal(record)}>
                <EditTwoTone
                  twoToneColor="#ea561b"
                  style={{ fontSize: "32px" }}
                />
              </Button>
            </Tooltip>

            <Tooltip title="delete bill">
              <Button type="link" onClick={() => showModal(record)}>
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

  const renderBillCredential = async (record) => {
    const response = await BillService.retrieveBillCredentialById(record.key);
    const {username, password} = response.data;
    setModalState({
      isModalVisible: true,
      currentSelectedRecord: record,
      billData: {username, password}
    });
  };

  const showModal = (record) => {
    renderBillCredential(record);
  };

  const handleOk = () => {
    setModalState({
      isModalVisible: false,
      currentSelectedRecord: null,
      billData: {username: '', password: ''},
    });
  };

  const handleCancel = () => {
    setModalState({
      isModalVisible: false,
      currentSelectedRecord: null,
      billData: {username: '', password: ''},
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
      <Modal
        title="Basic Modal"
        maskClosable={false}
        visible={currentModalState.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>{currentModalState.billData.username} | {currentModalState.billData.password}</div>
      </Modal>
    </div>
  );
};

export default Bill;
