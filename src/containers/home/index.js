import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { callApi } from '../../utils/api';
import SendConnection from './companyConnection';
import EmployeeConnection from './employeeConnection';
import useAuthenticate from '../../customHook/authenticate';
import { connect } from 'react-redux'
import { updateUserDetails } from '../../actions';

const Home_ = ({ updateUserDetails, userDetails }) => {

    const [company, setCompany] = useState()

    useAuthenticate(updateUserDetails, userDetails);
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
                <div style={{ marginTop: 40 }} />
                {company && <SendConnection data={company} />}
                <div style={{ marginTop: 40 }} />
                {company && <EmployeeConnection data={company} />}
                <div style={{ marginTop: 40 }} />
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

const mapStateToProps = (state, ownProps) => {
    return {
        userDetails: state.user
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateUserDetails: (details) => {
            dispatch(updateUserDetails(details))
        }
    }
}

const Home = connect(mapStateToProps, mapDispatchToProps)(Home_)


export default (Home);