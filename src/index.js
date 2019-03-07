import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore( rootReducer );

ReactDOM.render(
    <Provider store ={ store }>
         <Router>
            <App />
        </Router>
    </Provider>,
    
    document.getElementById('root')
);
