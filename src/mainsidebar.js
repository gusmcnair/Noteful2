import React from 'react';
import Folder from './folder';
import './styles.css';
import NotesContext from './NOTES_context.js';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class MainSidebar extends React.Component {
    static contextType = NotesContext;

    checkPage(){
        if(this.props.history.location.pathname !== "/"){
            return (<div className="item-container">
            <button onClick={this.props.history.goBack} className="add-item"><p> &lt; Back </p></button>
            </div>)
        }
    }

    render(){
        const contextValue = this.context
        return(
            <ul className="listslist">
                {this.checkPage()}
                {contextValue.folders.map((singleFolder) =>
                    <Folder
                        key={singleFolder.id}
                        id={singleFolder.id}                            
                        name={singleFolder.name}
                    />
                )}
                <div className="item-container">
                <Link 
                    className="add-item"
                        to={{ 
                            pathname: "/addnewfolder"
                    }}>
                        <p>+ Folder</p>
                </Link>
                </div>
            </ul>

        );
    }
}

export default withRouter(MainSidebar);