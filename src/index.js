import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import TodoList from './components/Todo';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'
import configureStore from './store/store';
import { Provider } from 'react-redux'

// store.subscribe(()=>{
//     console.log(store.getState());
// });
const store = configureStore();

const jsx = (
        <Provider store={store}>
            <TodoList />
        </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
