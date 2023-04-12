import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const createRoot = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	createRoot
);
