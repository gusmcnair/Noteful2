import React from 'react';
import Folder from './folder';
import './styles.css';
import NOTES from './notes.js';


export default class MainSidebar extends React.Component {


    render(){
        return(
            <ul className="listslist">
                {NOTES.folders.map((singleFolder) =>
                    <Folder
                        key={singleFolder.id}
                        id={singleFolder.id}                            
                        name={singleFolder.name}
                        notes={NOTES.notes}
                    />
                )}
                <div className="item-container">
                <div className="add-item"><p>+ Folder</p></div>
                </div>
            </ul>

        );
    }
}