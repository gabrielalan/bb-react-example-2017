import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/General/App';
import store from './store';
import './index.css';

const render = () => ReactDOM.render(<App store={store} />, document.getElementById('root'));

render();

store.subscribe(render);
