import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { App } from './App';
import './index.scss';

createRoot(
    document.getElementById("atm")
).render(<App/>)