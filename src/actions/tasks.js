import database from '../firebase/firebase'

// Get tasks from firebase action generator

const getTasksAction = (tasksArray) => {
    return {
        type: 'GET_TASKS',
        tasksArray,
    }
};

export const startGetTasksAction = () => {
    return (dispatch) => {
        const tasks = [];
        database.ref('/tasks').once('value', (snapshot)=>{
            snapshot.forEach((childSnapshot)=> {
                const task = {
                    key : childSnapshot.key,
                    taskData : childSnapshot.val(),
                };
                tasks.push(task)
            })
        }).then(()=>{
            dispatch(getTasksAction(tasks))
        });
    };
};

// Add Task action generator

const addTaskAction = (task) => {
    return ({
        type: 'ADD_TASK',
        task,
    })
};

export const startAddTaskAction = (task) => {
    return (dispatch, getState) => {
        database.ref('tasks').push(task)
            .then((snapshot) => {
                const taskData = {
                    taskData: task,
                    key: snapshot.key,
                }
                dispatch(addTaskAction(taskData));
            });
    };
};

// Delete all tasks action generator

const deleteAllTasksAction = () => {
    return ({
        type: 'DELETE_ALL_TASKS',
    })
};

export const startDeleteAllTasksAction = () => {
    return (dispatch, getState) => {
        database.ref('tasks').remove()
            .then(() => {
                dispatch(deleteAllTasksAction())
            });
    };
};

// Delete specific tasks action generator


const deleteTaskAction = (FID) => {
    return ({
        type: 'DELETE_TASK',
        FID,
    })
};

export const startDeleteTaskAction = (task, FID) => {
    return (dispatch, getState) => {
        database.ref(`/tasks/${FID}`).remove().then(() => {
            dispatch(deleteTaskAction(FID));
        });
    };
};


// Edit specific tasks action generator


const setEditTaskAction = (task) => {
    return ({
        type: 'EDIT_TASK',
        task,
    })
};

export const startEditTaskAction = (editedTask, editedTaskFID) => {
    return (dispatch, getState) => {
        database.ref(`/tasks/${editedTaskFID}`).set(editedTask.taskData).then((snapshot) => {
            dispatch(setEditTaskAction(editedTask));
        });
    };
}

