import React from 'react';
import Folder from './folder';
import './styles.css';
import NotesContext from './NOTES_context.js';


export default class MainSidebar extends React.Component {
    static contextType = NotesContext;

    render(){
        const contextValue = this.context
        return(
            <ul className="listslist">
                {contextValue.folders.map((singleFolder) =>
                    <Folder
                        key={singleFolder.id}
                        id={singleFolder.id}                            
                        name={singleFolder.name}
                    />
                )}
                <div className="item-container">
                <div className="add-item"><p>+ Folder</p></div>
                </div>
            </ul>

        );
    }
}