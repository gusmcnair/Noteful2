import React from 'react';
import './styles.css';
import NotesContext from './NOTES_context.js';

export default class AddNewNote extends React.Component {
    static contextType = NotesContext;


    constructor(props){
        super(props);
        this.noteName = React.createRef();
        this.noteBody = React.createRef();
        this.noteFolder = React.createRef();
        this.state = {
            notename: {value: ''},
            notecontents: {value: ''},
            folder: {value: 'Important'},
        }
    }

    updateNoteName(userInput){
        this.setState({notename: {value: userInput}});
    }

    updateNoteContents(userInput){
        this.setState({notecontents: {value: userInput}});
    }

    updateFolder(){
        this.setState({folder: {value: this.noteFolder.current.value}});
    }

    validateNoteName() {
        const noteName = this.state.notename.value.trim();
        if (noteName.length === 0){
            return "Note name is required to submit."
        }
    }

    validateNoteContents() {
        const noteContents = this.state.notecontents.value.trim();
        if(noteContents.length === 0){
            return "Note may not be empty."
        }
    }


    handleSubmit(event, addNote){
        event.preventDefault();
        this.updateFolder();
        const newNoteName = this.state.notename.value;
        const newNoteContent = this.state.notecontents.value;
        let newNoteFolderId = "";
        this.context.folders.map((folder) =>
            folder.name === this.state.folder.value ? newNoteFolderId = folder.id : newNoteFolderId === "")
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+ today.getDate();     
        fetch("http://localhost:9090/notes/", {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: newNoteName,
                modified: date,
                folderId: newNoteFolderId,
                content: newNoteContent,
            })
        })
        .then(response => {
            if(response.ok)
                return response.json()
        })
        .then(response => addNote(response))
        .catch(err => console.log(err));
        this.noteName.current.value = ""; 
        this.noteBody.current.value = ""; 
    }


    render(){
        const noteNameError = this.validateNoteName();
        const noteContentsError = this.validateNoteContents();

        return(
            <NotesContext.Consumer>
                {(context => (
                    <form onSubmit={ e => this.handleSubmit(e, context.addNote)}>
                        <label htmlFor="note-name">Note Name</label>
                        <input name="note-name" id="note-name" type="text" ref={this.noteName} onChange={e => this.updateNoteName(e.target.value)}/>
                        <label htmlFor="note-body">Note Contents</label>
                        <textarea rows="5" name="note-body" id="note-body" ref={this.noteBody} onChange={e => this.updateNoteContents(e.target.value)}/>
                        <label htmlFor="note-folder">Folder</label>
                        <select name="note-folder" id="note-folder" type="select" ref={this.noteFolder} onChange={e => this.updateFolder(e.target.value)}>
                            {this.context.folders.map((folder) => 
                                <option>
                                    {folder.name}
                                </option>
                            )}
                        </select>
                        <button name="submit-button" disabled={this.validateNoteName() || this.validateNoteContents()} id="submit-button">Submit</button>
                        <p>{noteNameError}
                        <br/>{noteContentsError}</p>
                    </form>
                ))}
            </NotesContext.Consumer>
        )
    }
}