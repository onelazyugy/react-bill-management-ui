import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveBills } from '../actions/bill'

const Bill = () => {
    const bills = useSelector(state => state.bills)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveBills());
    }, []);

    const renderBills = () => {
        return <div>
            {JSON.stringify(bills)};
        </div>
    };

    return (
        
        <div>
            {renderBills()}
        </div>
    )
};

export default Bill;