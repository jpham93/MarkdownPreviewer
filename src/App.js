import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Markdown compiler and previewer
import ReactMarkdown from 'react-markdown';

//intial value. serves as an example
let initialValue = `
# Welcome to my Markdown Previwer
## This is an example of another heading,
### and another...

Here is an example of code \`<span></span>\`

or...

\`\`\`
//A multi-line 
//code

var add = () => a + b;
\`\`\`

How about _italic_
or **bold**
or _**both**_!

Or just ~~cross everything out~~

try [links](https://www.mmafighting.com)

> I love block quotes! - James

but sadly no tables with this cdn,

but there are thematic breaks like so...

----

- and Indentation levels
  - there are
    - 4
      - to be exact

1. And you can number
1. Things
1. Like an 
- ordered list
* (without numbers!)
`

const Editor = ( props ) => {
  return (
    <div id='editor-container'>
      <h3 class='sub-title'>Editor</h3>
      <textarea id='editor' value={props.value} onChange={props.onChange} >  
      </textarea>
    </div> 
  );
}

class App extends Component {

  constructor ( props ) {
    super( props) ;
    
    this.state = {
      value: initialValue,
      preview: initialValue,
    }

    this.handleChange = this.handleChange.bind(this); 
    this.convertToMarkdown = this.convertToMarkdown.bind(this);
  }

  handleChange ( event ) {

  //handle sync problem when editing
  this.setState(
      {value: event.target.value},
      () => {
        let input = this.state.value.slice();
        this.convertToMarkdown(input);
      }
    );

  }

  convertToMarkdown ( input ) {  
    this.setState({
      preview : input
    });

  }

  render() {
    return (
      <div className="App">
        <h1 id='title'>Markdown Previewer</h1>
        <Editor value={this.state.value} onChange={this.handleChange} />
        <div id='preview'>
          <h3 class='sub-title'>Preview</h3>
          <ReactMarkdown source={this.state.preview} id='preview' />
        </div>
      </div>
    );
  }
}

export default App;