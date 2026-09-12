import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from '../vendor/pvt-remote-client/App.jsx';
createRoot(document.getElementById('root')).render(<App role="control" icon="./icons/icon-128.png"/>);
