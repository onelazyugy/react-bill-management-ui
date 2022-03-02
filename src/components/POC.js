import React, { useEffect, useState } from "react";
import { Input, Button } from "antd";
import BillService from "../services/bill-services";

const POC = (props) => {
    const [number, setNumber] = useState(-1);
    const initFormValues = {
        accountname: 'default', company: '',
        username: '', password: '',
        tags: [''], description: ''
    };
    const [value, setInitialValues] = useState(initFormValues);

    useEffect(() => {
        if(number !== -1) {
            const retrieveBillById = async () => {
                const { data } = await BillService.retrieveBillById(number);
                const initValue = {
                    accountname: data.accountName, company: data.company,
                    username: data.userName, password: data.password,
                    tags: data.tags, description: data.description
                };
                setInitialValues(initValue);
            };
            retrieveBillById();
        }
    }, [number]);

    const onPocClick = () => {
        setNumber(number + 1);
    }

    return (
        <div style={{ padding: "10px" }}>
            <Button
                onClick={onPocClick}
                type="primary"
                style={{ width: "50%" }}
                size="large"
            >
                +
            </Button>
            <div>
                {number}
            </div>
            <div>
                {value.accountname}
            </div>
        </div>
    );
};

export default POC;
