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

    const updateBill = (values) => {
        console.log('updating...', values);
    }

    return <CreateForm bill={bill} onUpdate={updateBill}/>;
};

export default Edit;
