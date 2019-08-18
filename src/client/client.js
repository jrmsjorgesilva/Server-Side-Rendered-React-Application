// STARTUP POINT FOR THE CLIENT SIDE APPLICATION
import React from 'react';
import reactDOM from 'react-dom';
import Home from './components/home';

reactDOM.hydrate(<Home />, document.getElementById("root"));

// setTimeout(() => {
//     console.log('This is the client!');
// }, 5000);