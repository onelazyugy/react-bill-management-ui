import React from 'react';
import { Row, Col } from "antd";

const Header = () => {
    return (
        <Row justify="center">
            <Col span={24}>
                <h1>Bill Management x</h1>
            </Col>
        </Row>
    );
}

export default Header;