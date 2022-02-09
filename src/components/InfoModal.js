import React from "react";
import { Modal } from "antd";
import { ExclamationCircleTwoTone } from "@ant-design/icons";

const InfoModal = (props) => {
  return (
    <Modal
      title={
        <span>
          <ExclamationCircleTwoTone
            twoToneColor="red"
            style={{ fontSize: "16px" }}
          />{" "}
          {props.title}
        </span>
      }
      maskClosable={props.maskClosable}
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
    >
      <div>
        {props.data.billData.username} | {props.data.billData.password}
      </div>
    </Modal>
  );
};

export default InfoModal;
