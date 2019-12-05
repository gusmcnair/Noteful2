import React from 'react';
import NoteDisplay from './notedisplay'
import './styles.css'

class MainPage extends React.Component {
    render(){
        return(
            <ul className="notes-list">
                {this.props.notes.map((SingleNote) =>
                    <NoteDisplay 
                        key={SingleNote.id + "__" + SingleNote.name}
                        id={SingleNote.id}
                        name={SingleNote.name}
                        modified={SingleNote.modified}
                        all={SingleNote}
                        />
                )}
                <div className="item-container">
                <div className="add-item"><p>+ Note</p></div>
                </div>
            </ul>
        );
    }
}

export default MainPage;