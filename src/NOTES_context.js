import React from "react";

const NotesContext = React.createContext({
    folders: [],
    notes: [],
    deleteNote: () => {},
})

console.log(NotesContext)

export default NotesContext;