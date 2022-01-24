import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveBills } from '../actions/bill'
import { Table } from 'antd';


const Bill = () => {
    const bills = useSelector(state => state.bills)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveBills());
    }, []);

    const renderBills = () => {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'accountName'
            },
            {
                title: 'Company',
                dataIndex: 'company'
            },
            {
                title: 'Actions',
                dataIndex: ''
            }
        ];
        const data = bills;
        return <Table columns={columns} dataSource={data} />;
    };

    return (
        <div>
            {renderBills()}
        </div>
    )
};

export default Bill;