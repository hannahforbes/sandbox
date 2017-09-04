//Demonstrates buttons and nested components

import React from 'react';

class App extends React.Component{
  render(){
    return <Button>I <Heart /> React</Button>
  }
}
//"<Heart />" has been nested in the button component

//stateless component
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}
//"&hearts;" is the html symbol for a love heart icon

export default App
