import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { callApi } from '../../utils/api';
import SendConnection from './companyConnection';
import EmployeeConnection from './employeeConnection';

const Home = () => {

    const [company, setCompany] = useState()

    useEffect(() => {
        const fetchCompany = async () => {
            const res = await callApi('get', '/company/fetch')
            console.log(res)

            if (res.status === 200) {
                setCompany(res.data)
            }
            else {
                setCompany(false)
            }
        }

        fetchCompany();
    }, [])

    return (<Container>
        <Row>
            <Col xs={2} />
            <Col xs={8} >
                {company && <h3>{company.name}</h3>}
                {company && <SendConnection data={company} />}
                {company && <EmployeeConnection data={company} />}
                {company === undefined && <div style={{ display: 'flex', height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center' }} >
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </div>
                }
                {company === false && <Button href="/register-company"  >Create Company</Button>}

            </Col>
            <Col xs={2} />
        </Row>
    </Container >
    )
}

export default Home;