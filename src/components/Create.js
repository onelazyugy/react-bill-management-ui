import React from "react";
import CreateForm from "./CreateForm";

import "../App.css";


const Create = () => {

  const createBill = (values) => {
    console.log('creating...', values);
  }

  return (
    <CreateForm onFinish={createBill} />
  );
};

export default Create;
