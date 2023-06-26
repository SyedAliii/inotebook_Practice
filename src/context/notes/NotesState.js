import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "649594dbf9e75bdf468db6a2",
            "user": "64956c077b6e8c1a1a365dd5",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-06-23T12:49:31.177Z",
            "__v": 0
        },
        {
            "_id": "649595374e5cae599163f2d8",
            "user": "64956c077b6e8c1a1a365dd5",
            "title": "New Note Updated",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-06-23T12:51:03.939Z",
            "__v": 0
        },
        {
            "_id": "6495953b4e5cae599163f2da",
            "user": "64956c077b6e8c1a1a365dd5",
            "title": "My Title 3",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-06-23T12:51:07.731Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);


    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;