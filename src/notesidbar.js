import React from 'react';
import { withRouter } from 'react-router-dom';
import NOTES from './notes.js';
import './styles.css';


class NoteSidebar extends React.Component {
    render(){
        const noteInfo = (this.props.location.pathname).replace(/\/notes\//, "");
        let thisFolderId = "";
        for(let i = 0; i < NOTES.notes.length; i++){if (noteInfo === NOTES.notes[i].id){thisFolderId = NOTES.notes[i].folderId}}
        let folderName = "";
        for(let i = 0; i < NOTES.folders.length; i ++){if (thisFolderId === NOTES.folders[i].id){folderName = NOTES.folders[i].name}}
        return(
            <div>
             <div className="item-container">
                <button onClick={this.props.history.goBack} className="add-item"><p> &lt; Back </p></button>
            </div>
            <h3>
                {folderName}
            </h3>
            </div>
        );
    }
}

export default withRouter(NoteSidebar);