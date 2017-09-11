//Shows basics of components, state and props

//1st Duplicate from App.js

//As I go along the code is change and updated but in order to keep later versions of the code (that demonstrate the basics), I have duplicated the page
//The next duplicate will have refactored something shown here

import React from 'react';

//Creating a Component
//OPTION ONE: Can have state

class App extends React.Component{
  constructor(){
    //State, on the other hand, represents a collection of values that are supposed to be managed as well as updated by our components
    super();
    //This gives the keyword "this" the context within our component rather than in its parent class React.component
    this.state = {
      txt: 'this is the state txt'
    }
    //See in the return function, <h1>{txt}</h1> the content deplayed changes depending on the value set as txt here
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
  //e is an event, "update" is going to update the state txt component on event "e"


  render(){
    //The render function is only allowed to return a single node (element e.g. <h1></h1>)
    //This is solved by "wrapping" a node in a parent node

    //BEFORE WRAPPER: return <h1>Hello Series</h1>

    //AFTER WRAPPER:

    // return (
    //   <div>
    //     <h1>Hello World</h1>
    //     <b>Bold</b>
    //   </div>
    // )

    let txt = this.props.txt
    return (
      //"Bind" means the onChange event is tied to the "update" component. Binding is necessary to make "this" work
      //Input means the browser displays a input text box
      //This code means that whatever is inputted into the input will change the div contents (see in Desktop/react_learning_snapshot_1)
      <div>
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>{txt}</h1>
        <h1>{this.state.txt}</h1>
      </div>
      //Here you can see the props "interpolated" into the element. "This is the prop text" displays in the browser
      //Below you can see the state interpolated into the element. The browser therefore shows "this is the prop value" then "this is the state txt"
    )



    //OR return React.createElement('h1', null, 'Hello Eggheads')
    //This is how React interprets JSX (looks like HTML) elements
    //Inside the brackets the first input is the component (custom components use capital letters), the second is something called "props" and the last is the actual content

  }
}

//OPTION TWO: Can not have state

//const App = () => <h1>Hello stateless</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
  //When you use ".isRequired" everything works fine in the browser but in the console it says "cat is listed as required but is undefined"
  //We therefore when over to index.js and defined cat as {5}
}

App.defaultProps = {
  txt:"this is the default text"
  //If txt is not defined then this text is passed in instead
}

export default App

//COURSE WAS DELETED BY EGGHEAD.IO first-react-app finished here
