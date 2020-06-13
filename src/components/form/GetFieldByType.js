import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const GetFieldByType = ({ type, field }) => {
    switch (type) {
        case 'input':
            return <Form.Group controlId={field.controlId}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type={field.type} placeholder={field.placeHolder} name={field.name} value={field.value} onChange={field.onChangeHandler} />
            </Form.Group>;
        case 'radio':
            return <Form.Group controlId={field.controlId} >
                <Form.Label as="legend" column sm={2}>
                    {field.label}
                </Form.Label>
                {
                    field.options.map((option,index) => <Form.Check
                        key={index}
                        type="radio"
                        label={option.label}
                        name={field.name}
                        value={option.id}
                        id={option.id}
                        checked={option.id === field.value}
                        onChange={field.onChangeHandler}
                    />)
                }
            </Form.Group>
        default:
            return <Form.Group controlId={field.controlId}>
                <Form.Label>{field.label}</Form.Label>
                <Form.Control type={field.type} placeholder={field.placeHolder} name={field.name} value={field.value} onChange={field.onChangeHandler} />
            </Form.Group>;
        // return
    }
}

export default GetFieldByType;