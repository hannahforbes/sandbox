import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update( e ){
    this.setState({txt: e.target.value})
  }


  render(){

    let txt = this.props.txt
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)}/>
      </div>
    )
  }
}

const Widget = (props) =>
<input type="text" onChange={props.update}/>
//On 1st duplicate this can be found in a detailed simplified way
//You can see "update" added as an "attribute" (prop) to the Widget component
//NOW In the browser, our child component is updating the state of our parent component
export default App
