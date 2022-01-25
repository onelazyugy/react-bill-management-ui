import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveBills } from "../actions/bill";
import { Table, Space } from "antd";
import { DeleteTwoTone, EyeTwoTone, EditTwoTone } from "@ant-design/icons";

const Bill = () => {
  const bills = useSelector((state) => state.bills);
  const dispatch = useDispatch();

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
            <EyeTwoTone twoToneColor="green" style={{ fontSize: "32px" }} />
            <EditTwoTone twoToneColor="#ea561b" style={{ fontSize: "32px" }} />
            <DeleteTwoTone
              twoToneColor="#cc0000"
              style={{ fontSize: "32px" }}
            />
          </Space>

          //   <Space size="middle">
          //     <a>{record.key}</a>
          //     <a>Delete</a>
          //   </Space>
        ),
      },
    ];
    return <Table columns={columns} dataSource={bills} />;
  };

  return (
    <div>
      {renderBills()}
    </div>
  );
};

export default Bill;
