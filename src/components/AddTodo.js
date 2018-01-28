import React from 'react';
import { connect } from 'react-redux';
import { startAddTaskAction, startDeleteAllTasksAction, startEditTaskAction } from '../actions/tasks';
import { editDataNewStateAction } from '../actions/editData';
import { Button } from 'reactstrap'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


class AddTodo extends React.Component {

    state = {
        userInput: '',
    };

    componentWillReceiveProps(nextProps) {
        const userInput = nextProps.editData.userInput;
        this.setState(() => ({
            userInput,
        }))
    };

    setUserInput = (e) => {
        const userInput = e.target.value;
        this.setState(() => ({
            userInput,
        }));

    };

    addTask = () => {
        this.props.addTask(this.state.userInput);
        this.setState(() => ({
            userInput: '',
        }));
    };

    setEditData = (arrID, fid) => {

        const editedTask = {
            taskData: this.state.userInput,
            key: fid,
        };

        this.props.setEditData(editedTask, fid);

        const resetEditStateData = {
            editState: false,
            arrID: '',
            userInput: '',
            fid: '',
        };

        this.props.setEditState(resetEditStateData);

    };

    render() {
        return (
            <div>
                <InputGroup>
                    <Input
                        type="text"
                        name="userText"
                        placeholder="Your text here"
                        value={this.state.userInput}
                        onChange={this.setUserInput}
                    />
                    <InputGroupAddon>
                        <Button color={this.props.editData.editState ? `success` : `primary`} onClick={this.props.editData.editState ? () => this.setEditData(this.props.editData.arrayID, this.props.editData.fid) : this.addTask}>{this.props.editData.editState ? `Edit Option` : `Add Option`}</Button>
                        <Button color="danger" onClick={this.props.deleteAllTasks}>Delete All Options</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        editData: state.editData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(startAddTaskAction(task)),
        deleteAllTasks: () => dispatch(startDeleteAllTasksAction()),
        setEditData: (editedTask, editedTaskFID) => dispatch(startEditTaskAction(editedTask, editedTaskFID)),
        setEditState: (newState) => dispatch(editDataNewStateAction(newState)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);