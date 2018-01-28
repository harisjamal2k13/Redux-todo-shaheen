import React from 'react';
import TodoListItems from './TodoListItems';
import { startDeleteTaskAction, startGetTasksAction } from '../actions/tasks';
import { editDataNewStateAction } from '../actions/editData';
import { connect } from 'react-redux';
import { ListGroup } from 'reactstrap';


class TodoTasks extends React.Component {

    state = {
        loadingPara : 'No tasks found!',
        loaded : false,
    };

    componentDidMount() {
        this.props.getTasks();
    };
    

    setEditState = (i, fid) => {
        const newState = {
            editState: true,
            fid,
            arrayID : i,
            userInput: this.props.tasks[i].taskData,
        };
        this.props.setEditState(newState);
    };


    render() {
        return (this.props.tasks.length > 0
            ?
            <ListGroup>
                {this.props.tasks.map((task, i) => {
                    return <TodoListItems
                        task={task.taskData}
                        key={task.key}
                        deleteTask={() => this.props.deleteTask(task, task.key)}
                        editTask={() => this.setEditState(i, task.key)}
                    />
                })}
            </ListGroup> : <p className="lead">{this.state.loadingPara}</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (task, FID) => dispatch(startDeleteTaskAction(task, FID)),
        setEditState: (newState) => dispatch(editDataNewStateAction(newState)),
        getTasks : () => dispatch(startGetTasksAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTasks);