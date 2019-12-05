import React from 'react';
import './styles.css'
import NOTES from './notes.js';
import NoteDisplay from './notedisplay'


export default class NotePage extends React.Component {
    render(){
        const noteInfo = (this.props.location.pathname).replace(/\/notes\//, "")
        const thisProps = (NOTES.notes)
        let thisNote = ""
        for(let i = 0; i < thisProps.length; i ++){
            if (thisProps[i].id === noteInfo){
                thisNote = thisProps[i];
            }
        }
        return(
            <div>
                <ul>
                    <NoteDisplay 
                        key={thisNote.id}
                        id={thisNote.id}
                        name={thisNote.name}
                        modified={thisNote.modified}
                        />
                        <p>{thisNote.content}</p>
                        </ul>
            </div>
        );
    }
}