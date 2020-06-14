import React, { useState } from 'react'
import Form from '../../components/form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { callApi } from '../../utils/api';
import { useHistory } from "react-router-dom";


const SignUp = () => {

    let history = useHistory();

    const [value, setValue] = useState({
        email: '',
        password: '',
        name: '',
        gender: '',
        // dob: '',
        contact: ''
    })

    const [status, setStatus] = useState(undefined);

    const onChangeHandler = (e) => {
        const { name, value: _value } = e.target;

        setValue({ ...value, [name]: _value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await callApi('post', '/users/create', value)

        if (res.status === 200) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }

    const formFields = [
        {
            formType: 'input',
            controlId: 'formBasicEmail',
            type: 'text',
            label: 'Full name',
            placeHolder: 'Enter full name',
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
            type: 'password',
            label: 'Password',
            placeHolder: 'Enter password',
            name: 'password',
            value: value.password,
            onChangeHandler
        },
        {
            formType: 'radio',
            controlId: 'formBasicRadio',
            label: 'Gender',
            name: 'gender',
            value: value.gender,
            options: [{
                label: 'Male',
                id: 'm',
            }, {
                label: 'Female',
                id: 'f',
            }, {
                label: 'Other',
                id: 'o',
            }],
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

    return (
        <Container>
            <Row>
                <Col xs={2} />
                <Col xs={8} >
                    {
                        !status && <Form fields={formFields} onSubmit={onSubmit} />
                    }
                    {
                        status ? <><Alert variant="success">
                            Successfully signed up. Please Login
                      </Alert>
                            <Button variant="link" href="/sign-in" > Login</Button>
                        </>
                            :
                            <><p>Have account already?</p> <Button href="/sign-in" > Sign in </Button> </>

                    }
                    {
                        status === false && <Alert variant="danger">
                            Something went wrong! try again
                       </Alert>
                    }

                </Col>
                <Col xs={2} />
            </Row>
        </Container>)
}

export default SignUp;