import React, { useState } from 'react'
import Addnote from './Addnote';

function Notelist() {

    const [notes,setNotes] = useState([
        {id: 1, title: "note 1"},
        {id: 2, title: "note 2"},
        {id: 3, title: "note 3"},


    ]);

const newNote  = (title) => 
{
    
setNotes([...notes,{id: notes.length+1, title: title}])
}

  return (
    <div className='container mt-3'>
        <ul className='note-list'>
            {
                notes.map((note,index) => {
                    return (
                        <li key={index}>{note.id} {note.title}</li>
                    );
                })
            }
        </ul>
        {/* <button className='btn btn-primary' onClick={addNote}>Add Note</button> */}
        <Addnote newNote = {newNote}/>
        </div>
  )
}

export default Notelist