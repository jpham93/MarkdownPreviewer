import React from 'react'

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

export default Editor