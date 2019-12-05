import React from 'react';
import NoteDisplay from './notedisplay'
import './styles.css';
import NOTES from './notes.js';




class FolderPage extends React.Component {

    render() {
        const folderId = (this.props.location.pathname).replace(/\/folder\//, "")
        const thisProps = NOTES.notes.filter(singleNote => singleNote.folderId === folderId)
        return (
            thisProps.map((singleNote) =>
                <ul>
                    <NoteDisplay
                        key={singleNote.id + "__" + singleNote.name}
                        id={singleNote.id}
                        name={singleNote.name}
                        modified={singleNote.modified}
                        all={singleNote}
                    />
                </ul>
            ))


    }
}

export default FolderPage;


