// App here
import React from 'react'
import AddTodo from './AddTodo';
import TodoTasks from './TodoTasks';
import { Container, Col, Row } from 'reactstrap'

class TodoList extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                        <h1 className="display-4 text-center">TodoList with React and Redux</h1>
                        <AddTodo />
                        <TodoTasks />
                        <p className="text-muted text-center">By Ma'aaz Shaheen</p>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default TodoList;