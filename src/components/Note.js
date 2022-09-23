import React from 'react'

const Note = ({note}) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content.slice(0,80)}</p>
    </div>
  )
}

export default Note