import ReactDom from 'react-dom';
import React from 'react';
import Main from './main';
import css from './main.css';
import { Provider } from 'react-redux';
import store from './store';

const render = () => ReactDom.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));

render();
store.subscribe(render);
