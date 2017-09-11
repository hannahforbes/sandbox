'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'orange', color: 'white', fontFamily: 'verdana' } },
    'Hello World'
), document.getElementById('react-container'));

//We've transpiled everything in the command line to fill this file! Woohoo
//Commands:
    // npm install --save-dev babel-preset-latest babel-preset-react babel-preset-stage-0
    // babel ./src/index.js --out-file ./dist/bundle.js
