import React, { useEffect, useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { callApi } from '../../utils/api';
import ListGroupComponent from '../../components/ListGroup';
import Search from '../../components/search';

const CompanyDetails = ({ data }) => {

    const [companyList, setCompanyList] = useState([])
    const [requests, setRequests] = useState([])

    useEffect(() => {
        const getRequests = async () => {
            const res = await callApi('post', '/company/get-requests', { company_id: data.id })

            // const res1 = await callApi('get', `/company/employees?companyId=${data.id}`)

            // console.log(res1,"employees")

            if (res.status === 200) {
                setRequests(res.data)
            }
        }

        getRequests();
    }, [])

    const handleSearch = async (searchStr) => {
        const res = await callApi('get', `/company/search?search=${searchStr}`)

        if (res.status === 200) {
            setCompanyList(res.data)
        }

    }

    const handleClick = async (selectedCompany) => {
        await callApi('post', '/company/request', {
            company_id: data.id,
            second_party: selectedCompany.id
        })
    }

    const handleAccept = async (connection) => {
        await callApi('put', '/company/respond', {
            status: 'accepted',
            connectionId: connection.id
        })
    }

    const handleReject = async (connection) => {
        await callApi('put', '/company/respond', {
            status: 'rejected',
            connectionId: connection.id
        })
    }

    const formatRequests = useMemo(() => {
        return requests.map(req => ({ name: `company id: ${req.first_party}`, ...req }))
    }, [requests])

    return (<Container>
        <Row>
            <Col xs={12} >

                <Search handleSearch={handleSearch} placeholder="Search company" />
                <ListGroupComponent items={companyList} buttons={[{ label: 'Send connection', handleClick }]} />

            </Col>
        </Row>

        <Row>
            <Col xs={12} >
                <div style={{ marginTop: 40 }} />

                <h6>Connection requests</h6>

                <ListGroupComponent
                    items={formatRequests}
                    buttons={[{ label: 'Accept', handleClick: handleAccept }, { label: 'Reject', handleClick: handleReject }]} />

            </Col>
        </Row>

    </Container >
    )
}

export default CompanyDetails;