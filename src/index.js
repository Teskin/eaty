import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Component
import Preferences from './components/preferences';

ReactDOM.render(<Preferences/>, document.getElementById('root'));
registerServiceWorker();
