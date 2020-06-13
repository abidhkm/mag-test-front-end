import React, { useState } from 'react'
import Form from '../../components/form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { callApi } from '../../utils/api';
import { useHistory } from "react-router-dom";


const NewCompany = () => {

    let history = useHistory();


    const [value, setValue] = useState({
        name: '',
        address: '',
        email: '',
        contact: ''
    })

    const [status, setStatus] = useState(undefined);


    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await callApi('post', '/company/create', value)

        if (res.status === 200) {
            setStatus(true)

            setTimeout(() => {
                history.push('/')
            }, 3000);
        }
        else {
            setStatus(false)
        }
    }

    const onChangeHandler = (e) => {
        const { name, value: _value } = e.target;

        setValue({ ...value, [name]: _value })
    }


    const formFields = [
        {
            formType: 'input',
            controlId: 'formBasicEmail',
            type: 'text',
            label: 'Full name of company',
            placeHolder: 'Enter full name of company',
            name: 'name',
            value: value.name,
            onChangeHandler
        }, {
            formType: 'input',
            controlId: 'formBasicEmail',
            type: 'email',
            label: 'Email address',
            placeHolder: 'Enter email',
            name: 'email',
            value: value.email,
            onChangeHandler
        }, {
            formType: 'input',
            controlId: 'formBasicPassword',
            type: 'text',
            label: 'Enter address',
            placeHolder: 'Enter address',
            name: 'address',
            value: value.address,
            onChangeHandler
        },
        {
            formType: 'input',
            controlId: 'formBasicContact',
            type: 'text',
            label: 'Contact',
            placeHolder: 'Enter contact number',
            name: 'contact',
            value: value.contact,
            onChangeHandler
        }
    ]

    return <Container>
        <Row>
            <Col xs={2} />
            <Col xs={8} >
                {
                    !status && <Form fields={formFields} onSubmit={onSubmit} />
                }
                {
                    status && <><Alert variant="success">
                        Successfully signed up. Please Login
              </Alert>
                        <Button variant="link" href="/" > Dashboard</Button>
                    </>
                }
                {
                    status === false && <Alert variant="danger">
                        Something went wrong! try again
               </Alert>
                }
            </Col>
            <Col xs={2} />
        </Row>
    </Container>
}

export default NewCompany;