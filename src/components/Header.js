import React from 'react';
import { Row, Col, Space } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Row justify="center">
                <Col>
                    <h1>Bill Management</h1>
                </Col>
            </Row>
            <Row justify="center">
                <Space>
                    <Col>
                        <Link to="/">
                            Login
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/create">
                            Create
                        </Link>
                    </Col>
                </Space>
            </Row>
        </div>
    );
}

export default Header;