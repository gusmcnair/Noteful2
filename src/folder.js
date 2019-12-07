import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContext from './NOTES_context.js';


export default class Folder extends React.Component {
    static contextType = NotesContext;
    
    render(){
        const contextValue = this.context
        let total = 0;
        const num = contextValue.notes.map((note) => {
            if(this.props.id === note.folderId){total ++};
            return total;
        })
        return(
            <NavLink to={{
                pathname: `/folder/${this.props.id}`
                }}
                activeClassName="selectedLink"
                >
        <li>
 
                    <h2>{this.props.name}</h2>
                <p>{total}</p>
        </li>
        </NavLink>
            
        )
    }}

