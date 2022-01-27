import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space, Button, Tooltip } from "antd";
import { DeleteTwoTone, EyeTwoTone, EditTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

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
            <Tooltip title="view details">
              <Button type="link">
                <EyeTwoTone twoToneColor="green" style={{ fontSize: "32px" }} />
              </Button>
            </Tooltip>

            <Tooltip title="edit bill">
              <Button type="link">
                <EditTwoTone
                  twoToneColor="#ea561b"
                  style={{ fontSize: "32px" }}
                />
              </Button>
            </Tooltip>
            
            <Tooltip title="delete bill">
              <Button type="link">
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
