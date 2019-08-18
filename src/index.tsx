import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import App from './views';

import './assets/font/iconfont.css'
import './index.css';

import 'element-theme-default';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
