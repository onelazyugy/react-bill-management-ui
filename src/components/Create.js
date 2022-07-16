import React from "react";
import CreateForm from "./CreateForm";
import BillService from "../services/bill-services";

import "../App.css";


const Create = () => {
  const createBill = (bill) => {
    console.log('creating...', bill);
    return BillService.createBill(bill);
  }

  return (
    <CreateForm onFinish={createBill} />
  );
};

export default Create;
