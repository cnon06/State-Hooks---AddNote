import React, { useState } from 'react'

function Addnote({newNote}) {
    const [title,setTitle] = useState("");

const addNote = (e) => 
{
e.preventDefault();
newNote(title)
setTitle('')
// console.log("fdffghgj")
}

  return (
    <div>
        <form onSubmit={addNote}>
            <p>{title}</p>
            <label htmlFor="title"></label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="Add Note" />
        </form>
    </div>
  )
}

export default Addnote