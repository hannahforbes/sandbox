import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <App cat={5} txt="this is the prop value"/>,
  document.getElementById('root')
);

//You can add "props" into an element much like adding an attribute into an html element
//We then "interpolate" the props in our app in App.js using curly brackets (see in App.js)
//Props are a collection of static values passed into our component that are not changed by the component
//State, on the other hand, represents a collection of values that are supposed to be managed as well as updated by our components
