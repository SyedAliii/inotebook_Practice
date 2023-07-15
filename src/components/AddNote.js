import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = (props) => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert("Added Successfully", "success");
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h2>Add a Note</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Title" name="title" onChange={onChange} minLength={5} required value={note.title}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" id="desc" placeholder="Enter Description" name="description" onChange={onChange} minLength={5} required value={note.description}/>
                </div>
                <div className="form-group my-3">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" id="tag" placeholder="Enter Tag" name="tag" onChange={onChange} minLength={5} required value={note.tag}/>
                </div>
                <button disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary mb-2" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
