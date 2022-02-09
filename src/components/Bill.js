import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space, Button, Tooltip, Modal } from "antd";
import {
  DeleteTwoTone,
  EyeTwoTone,
  EditTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import BillService from "../services/bill-services";
import InfoModal from "./InfoModal";

const Bill = () => {
  const MODAL_DELETE = "Delete Confirmation";
  const MODAL_VIEW = "View Credential";
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentModalState, setModalState] = useState({
    isModalVisible: false,
    currentSelectedRecord: null,
    billData: { username: "", password: "" },
    modalInfo: { type: "" },
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
              <Button
                type="link"
                onClick={() => showModal({ record: record, type: MODAL_VIEW })}
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

  const renderBillCredential = async (modalInfo) => {
    if (modalInfo.type === MODAL_VIEW) {
      const response = await BillService.retrieveBillCredentialById(
        modalInfo.record.key
      );
      const { username, password } = response.data;
      setModalState({
        isModalVisible: true,
        currentSelectedRecord: modalInfo.record,
        billData: { username, password },
        modalInfo: { type: modalInfo.type },
      });
    } else {
    }
  };

  const showModal = (modalInfo) => {
    renderBillCredential(modalInfo);
  };

  const handleOk = () => {
    setModalState({
      isModalVisible: false,
      currentSelectedRecord: null,
      billData: { username: "", password: "" },
      modalInfo: { type: "" },
    });
  };

  const handleCancel = () => {
    setModalState({
      isModalVisible: false,
      currentSelectedRecord: null,
      billData: { username: "", password: "" },
      modalInfo: { type: "" },
    });
  };

  const showConfirmationModal = (record) => {
    Modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      onOk() {console.log("okie")},
      onCancel() {console.log("cancel")},
      content: (
        <p>
          Are you sure you want to delete <b>{record.accountName}</b>?
        </p>
      ),
      okText: "Delete",
      cancelText: "Cancel",
    });
  };

//   const showViewCredentialModal = (modalInfo) => {
//     renderBillCredential(modalInfo);
//   }

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
      <InfoModal
        title={currentModalState.modalInfo.type}
        maskClosable={false}
        visible={currentModalState.isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        data={currentModalState}
      />
    </div>
  );
};

export default Bill;
