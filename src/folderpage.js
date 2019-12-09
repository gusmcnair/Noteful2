import React from 'react';
import NoteDisplay from './notedisplay'
import './styles.css';
import NotesContext from './NOTES_context.js';
import { Link } from 'react-router-dom';



class FolderPage extends React.Component {
    static contextType = NotesContext;
    render(){
        const contextValue = this.context;
        const folderId = (this.props.location.pathname).replace(/\/folder\//, "")
        const thisProps = contextValue.notes.filter(singleNote => singleNote.folderId === folderId)
        return (
            <>
            {thisProps.map((singleNote) =>
                <ul>
                    <NoteDisplay
                        key={singleNote.id + "__" + singleNote.name}
                        id={singleNote.id}
                        name={singleNote.name}
                        modified={singleNote.modified}
                        all={singleNote}
                    />
                </ul>
            )}
            <div className="item-container">
            <Link className="add-item"
                    to={{ pathname: "/addnewnote" }}>
                    <p>+ Note</p>
            </Link>
            </div>
            </>
            )
    }
}

export default FolderPage;


