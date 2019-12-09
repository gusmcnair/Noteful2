import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './styles.css';
import NotesContext from './NOTES_context.js';
import PropTypes from 'prop-types';


class NoteDisplay extends React.Component{


    handleRemoveClick(noteId, deleteNote){
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
                <p>Modified {this.props.modified[10] === "T" ? this.props.modified.replace(/T.*$/,"") : this.props.modified}</p>
                <button className="remove" onClick={() => {
                    if(this.props.history.location.pathname.charAt(1) === "n"){this.props.history.goBack()}
                    this.handleRemoveClick(
                        this.props.id, 
                        context.deleteNote,
                        )
                }}>Remove</button>
            </li> ))}
            </NotesContext.Consumer>
        )
    }
}

NoteDisplay.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    modified: PropTypes.string.isRequired,
  };

export default withRouter(NoteDisplay);