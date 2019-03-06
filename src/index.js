import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './reducers';
import { reducer as formReducer } from 'redux-form';

const store = createStore( formReducer, {});

ReactDOM.render(
    <Provider store ={ store }>
         <Router>
            <App />
        </Router>
    </Provider>,
    
    document.getElementById('root')
);
