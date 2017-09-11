//This first copy of index.js shows the react code WITHOUT using JSX


//This is describing exactly which of the methods I'm using as part of the React/ReactDOM packages
const { createElement } = React
const { render } = ReactDOM

//Here we are adding new properties for a class under the new component "style"
//You can see it is added into the const "createElement" with the props "style: style"
const style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
}

//Here we are creating an element to be rendered by the DOM
//the createElement() function has three arguments: what the element is, its properties, its contents
const title = createElement(
  'h1',
  {id: 'title', className: 'header', style: style},
  'Hello World'
)

//Now we've created our element we need to render it
//ReactDOM.render takes in two arguments: the name of the element we want to render, the second is where we want to render this in the actual DOM
//In this case we are targeting an element called 'react-container'
render(
  title,
  document.getElementById('react-container')
)
