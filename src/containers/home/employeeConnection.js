import React, { useEffect, useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { callApi } from '../../utils/api';
import ListGroupComponent from '../../components/ListGroup';
import Search from '../../components/search';

const EmployeeConnection = ({ data }) => {

    const [users, setUsers] = useState([])

    const handleSearch = async (searchStr) => {
        const res = await callApi('get', `/users?search=${searchStr}`)

        if (res.status === 200) {
            setUsers(res.data)
        }
    }

    const handleClick = async (user) => {
        console.log(user)
        await callApi('post', '/company/new-employee', {
            user_id: user.id,
            company_id: data.id
        })
    }


    return (<Container>
        <Row>
            <Col xs={12} >

                <Search handleSearch={handleSearch} placeholder="Search user" />
                <ListGroupComponent items={users} buttons={[{ label: 'Add to company', handleClick }]} />

            </Col>
        </Row>
    </Container >
    )
}

export default EmployeeConnection;