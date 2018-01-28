import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { tasksReducer } from '../reducers/tasks';
import thunk from 'redux-thunk';
import { editDataReducer } from '../reducers/editData';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export default () => {
    const store = createStore(
        combineReducers({
            tasks: tasksReducer,
            editData: editDataReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
