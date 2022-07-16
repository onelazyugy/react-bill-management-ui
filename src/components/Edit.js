import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateForm from "./CreateForm";
import BillService from "../services/bill-services";

const Edit = (props) => {
    const {id} = props.match.params;
    const [bill, setBill] = useState(null);

    useEffect(() => {
        if (id !== undefined) {
            const retrieveBillById = async () => {
                const { data } = await BillService.retrieveBillById(id);
                setBill(data);
            };
            retrieveBillById();
        }
    }, []);

    const updateBill = (bill) => {
        console.log('updating...', bill);
        return BillService.updateBill(bill);
    }

    return <CreateForm bill={bill} onFinish={updateBill}/>;
};

export default Edit;
