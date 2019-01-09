import React from 'react'

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

export default Header