import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import NotesContext from './NOTES_context.js';


export default class NoteDisplay extends React.Component{

    handleRemoveClick(noteId, deleteNote){
        console.log(`Remove was clicked for note ${noteId}.`)
        fetch(`http://localhost:9090/notes/${noteId}`, {
            method: 'DELETE'
    })
        .then(response => {
            if(response.ok)
                return response.json()})
        .then(response => deleteNote(noteId))
        .catch(err => console.log(err))
    }
    
    render(){
        return(
            <NotesContext.Consumer>
            {(context => (
            <li>
                <Link to={{
                    pathname: `/notes/${this.props.id}`,
                    allInfo: this.props.all,
                    }}>
                    <h2>{this.props.name}</h2>
                </Link>
                <p>Modified {this.props.modified.replace(/T.*$/,"")}</p>
                <button className="remove" onClick={() => {
                    this.handleRemoveClick(
                        this.props.id, 
                        this.context.deleteNote)
                }}>Remove</button>
            </li> ))}
            </NotesContext.Consumer>
        )
    }
}