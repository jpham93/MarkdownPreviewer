/**Everything is done in one file to run on Codepen*/

import React, { Component } from 'react';
import './App.css';

// Markdown compiler and previewer (won't pass FCC test with this markdown compiler)
// import ReactMarkdown from 'react-markdown';

// Markdown compiler via Marked.js
import marked from 'marked';

// intial value. serves as an example. Also Global var if user wants to switch back to this example
const defaultText = `
# Welcome to my Markdown Previewer
## This is an example of another heading,
### and another...

Here is an example of code \`<span>Inline text</span>\`

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

try [links](https://www.freecodecamp.org)

> I love block quotes! - James

and there are thematic breaks like so...

----

### How about some images
![React](https://daveceddia.com/images/start-small.png)

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

// // ALLOWS LINE BREAKS WITH RETURN BUTTON
// marked.setOptions({
//   breaks: true,
// });

// // INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
//   return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

// Presentational Components
const Header = (props) => {
  return(
    <div id='header'>
      <h1 id='title'>Markdown Previewer</h1>
      <div className='btn-group' id='editor-btn'>
        <button value='clear' onClick={props.handleClick}>Clear</button>
        <button value='default' onClick={props.handleClick}>Default</button>    
      </div>

      <div className='btn-group' id='preview-btn'>
        <button value='HTML' onClick={props.handleClick}>HTML</button>
        <button value='source' onClick={props.handleClick}>Source</button>
      </div>
    </div>
  )
}

const Editor = (props) => {
  return(
    <textarea 
      id='editor'
      name='content'
      value={props.data.content}
      onChange={props.handleChange}
    /> 
  )
}

const Previewer = (props) => {
  return(
    <div id='preview'
        dangerouslySetInnerHTML={{__html: !props.data.isSource ? marked(props.data.content, { renderer: renderer }): null}}>
      {props.data.isSource ? marked(props.data.content) : null} 
    </div>
  )
}


// Smart Component. Maintains state and handles all events
class App extends Component {
  constructor() {
    super()
    this.state = {
      content: defaultText,
      isSource: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target // save specific properties of textarea to local var
    this.setState({[name]: value})
  }

  handleClick(event) {  // for button options above editor and previewer
    const {name, value} = event.target
    this.setState(prevState => {
      switch(value) {
        case 'clear':
          return {content: ''}

        case 'default':
          return {content: defaultText}

        case 'HTML':
          return {isSource: false}

        case 'source':
          return {isSource: true}
      } 
    })

  }

  render() {
    return(
      <div id='main'>
        <Header handleClick={this.handleClick} />
        <div id='display-container'>
          <Editor data={this.state} handleChange={this.handleChange} />
          <Previewer data={this.state} />
        </div>
      </div>
    )
  }
}

export default App;