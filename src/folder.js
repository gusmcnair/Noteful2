import React from 'react';
import { NavLink } from 'react-router-dom';


export default class Folder extends React.Component {
    
    render(){
        let total = 0;
        const num = this.props.notes.map((note) => {
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

