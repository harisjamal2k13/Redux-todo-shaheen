import React from 'react';
import {Button, ListGroupItem, Col, Row} from 'reactstrap'

const TodoListItems = (props) => {
    return (
        <ListGroupItem className="justify-content-between">
            <Row>
                <Col>
                    {props.task}
                </Col>
                <Col className="text-right">
                <Button color="success" onClick = {props.editTask}>Edit</Button>
                <Button color='danger' onClick = {props.deleteTask}>Delete</Button>
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default TodoListItems;