//Duplicated to allow deletion of comments

//This is describing exactly which of the methods I'm using as part of the React/ReactDOM packages
//const { createElement } = React (removed due to JSX used below)
const { render } = ReactDOM



//Here we are creating an element to be rendered by the DOM
//the createElement() function has three arguments: what the element is, its properties, its contents

//Instead of using the "createElement" call shown below, we use JSX in the render function
// const title = createElement(
//   'h1',
//   {id: 'title', className: 'header', style: style},
//   'Hello World'
// )

//Now we've created our element we need to render it
//ReactDOM.render takes in two arguments: the name of the element we want to render, the second is where we want to render this in the actual DOM
//In this case we are targeting an element called 'react-container'
render(
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
  Hello World
  </h1>,
  document.getElementById('react-container')
)
//Instead of nesting the a style object in the JSX element you could create a const called style, with the relevant properties, and just insert style into the JSX expression
//e.g.
    // const style = {
    //   backgroundColor: 'orange',
    //   color: 'white',
    //   fontFamily: 'verdana'
    // }
//Then in the JSX element "style={style}" is inserted
