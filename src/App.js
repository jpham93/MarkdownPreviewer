/**Everything is done in one file to run on Codepen*/

import React, { Component } from 'react';
import './App.css';

// Markdown compiler and previewer (won't pass FCC test with this markdown compiler)
// import ReactMarkdown from 'react-markdown';

// import components
import Header from './components/Header'
import Previewer from './components/Previewer'
import Editor from './components/Editor'

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

// components moved to components folder

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