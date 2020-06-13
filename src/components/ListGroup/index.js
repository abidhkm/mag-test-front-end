import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ListItem = ({ data, buttons }) => {

    const { name } = data;

    return < ListGroup.Item > <p>{name}  </p>

        {
            buttons.map((button,index) =>  <Button key={index} onClick={() => { button.handleClick(data) }} >{button.label}</Button> )
        }
       
    </ListGroup.Item >
}

const ListGroupComponent = ({ items, ...props }) => {
    return (
        <ListGroup>
            {
                items.map((item, index) => <ListItem data={item} key={index} {...props} />)
            }
        </ListGroup>
    )
}

export default ListGroupComponent;