const { render } = ReactDOM

render(
  <h1 id='title'
      className='header'
      style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
  Hello World
  </h1>,
  document.getElementById('react-container')
)

//Without Babel this doesn't work in the browser - the error shows "unexpected syntax <" i.e. the first time JSX occurs
//We therefore need a transpiler (Babel) to allow this 
