import React, { useState } from 'react'
import Form from '../../components/form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import { callApi } from '../../utils/api';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
    let history = useHistory();

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const [status, setStatus] = useState(undefined);


    const onChangeHandler = (e) => {
        const { name, value: _value } = e.target;

        setValue({ ...value, [name]: _value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const res = await callApi('post', '/users/signin', value)

        if (res.status === 200) {
            localStorage.setItem('token', res.data.token)
            history.push('/')
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }

    const formFields = [{
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
    }]

    return (<Container>
        <Row>
            <Col xs={2} />
            <Col xs={8} >
                <Form fields={formFields} onSubmit={onSubmit} />
                {
                    status === false && <Alert variant="danger">
                        Password or email is wrong.
               </Alert>
                }
            </Col>
            <Col xs={2} />
        </Row>
    </Container>
    )
}

export default SignIn;