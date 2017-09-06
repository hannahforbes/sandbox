//React synthetic event systems
//Which normizes all events I may want to use across various browsers

import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {currentEvent: '---'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
      <div>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
          cols="30"
          rows="10" />
          <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }
}

//Looking at the code from the first line after the div open to the last line before the close div

//"textarea" creates an area on the page that text can be typed into (more than one line)
//"onKeyPress" means that when text is typed into the "textarea" the "current event" ("---") will turn into "keypress" aka the "eventType"
//"onCopy" means when the text in the "textarea" is copied "---" displays "copy"
//"onCut" means [...] displays "cut"
//"onPaste" means [...] displays "paste"
//"onFocus" means when the "textarea" is clicked on the "---" displays "focus"
//"onBlur" means after the above, if the "textarea" is clocked off the "---" displays "blur"
//"onDoubleClick" means a first click on the "textarea" = "focus", two clicks in the "textarea" = "dbleclick"
//"onTouchStart" refers to a touch device e.g. Tablet, when the user first touches the edge of the "textarea" the "---" displays "touchstart"
//"onTouchMove" [...], as the user is moving the "textarea" it expands and "---" displays "touchmove"
//"onTouchEnd" [...], when the user stops touching "---" displays "touchend"

export default App
