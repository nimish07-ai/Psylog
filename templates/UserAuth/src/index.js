import React from 'react';
import ReactDOM, {render} from 'react-dom';
// import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('app')
);


window.sub={
    Audio: null,
    vtt: null,
    Json: {
        0:"",
        100:"",
        200:"",
        300:"",
        400:"",
        500:"",
        600:"",
        700:"",
        800:"",
        900:"",
        1000:"",
        1100:"",
        1200:"",
    }}
