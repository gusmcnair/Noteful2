import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


export default class NoteDisplay extends React.Component{
    render(){
        return(
            <li>
                <Link to={{
                    pathname: `/notes/${this.props.id}`,
                    allInfo: this.props.all,
                    }}>
                    <h2>{this.props.name}</h2>
                </Link>
                <p>Modified {this.props.modified.replace(/T.*$/,"")}</p>
                <p className="remove">Remove</p>
            </li>
        )
    }
}