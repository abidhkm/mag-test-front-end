import React from 'react'
import GetFieldByType from './GetFieldByType'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FormComponent = ({ fields, onSubmit }) => {


    const renderFields = () => {
        return fields && fields.map((field,index) => {
            const { formType, ...props } = field;
            return <GetFieldByType key={index} type={formType} field={props} />
        })
    }

    return (
        <Form>
            {renderFields()}
            <Button variant="primary" type="submit" onClick={onSubmit} >
                Submit
            </Button>
        </Form>

    )
}

export default FormComponent;