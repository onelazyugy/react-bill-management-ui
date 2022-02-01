import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space, Button, Tooltip, Modal } from "antd";
import { DeleteTwoTone, EyeTwoTone, EditTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Bill = () => {
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const history = useHistory();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

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

  const showModal = (record) => {
    setSelectedRecord(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const renderSelectedRecordOntoModal = () => {
    if(selectedRecord !== null) {
        return(<p>{selectedRecord.accountName}</p>);
    }
    return(<p>no record</p>);
  }

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
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>{renderSelectedRecordOntoModal()}</div>
      </Modal>
    </div>
  );
};

export default Bill;
