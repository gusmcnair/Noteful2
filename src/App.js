import React from 'react';
import { Route, Switch } from "react-router-dom";
import HeaderBanner from './header-banner';
import NotePage from './notepage.js';
import FolderPage from './folderpage.js';
import MainPage from './mainpage.js';
import NoteSidebar from './notesidbar.js';
import MainSidebar from './mainsidebar.js';
import './styles.css';
import NotesContext from './NOTES_context.js';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
    "folders": [],
    "notes": []
  }     
};

  handleFoldersSetState = (apiFolders) => {
    this.setState({
      folders: apiFolders,
    })
  }

  handleNotesSetState = (apiNotes) => {
    this.setState({
      notes: apiNotes,
    })
  }

deleteNote = (noteId) => {
  const newNoteList = this.state.notes.filter(note =>
    note.id !== noteId)
    this.setState({
      notes: newNoteList,
    })
}

componentDidMount(){
  fetch("http://localhost:9090/folders")
  .then(response =>  {
    if (response.ok)
      return response.json();
})
  .then(response => this.handleFoldersSetState(response))
  .catch(err => console.log(err));

  fetch("http://localhost:9090/notes")
  .then(response => {
    if(response.ok)
      return response.json();
  })
  .then(response => this.handleNotesSetState(response))
  .catch(err => console.log(err));
}
  
render(){  
  const contextValue = {
    notes: this.state.notes,
    folders: this.state.folders,
    deleteNote: this.deleteNote,
  }  
  return (
    <>
    <HeaderBanner />
    <main className='App'>
      <NotesContext.Provider value={contextValue}>
      <Switch>
        <section className="sidebar">
          <Route exact path="/" render={props =>
          (<MainSidebar {...contextValue}/>)}/>
          <Route path="/folder/:folderId" component={MainSidebar} />
          <Route path="/notes" component={NoteSidebar} />
        </section>
      </Switch>
      <Switch>
        <section className="main-page">
          <Route exact path="/" render={props =>
          (<MainPage {...contextValue}/>)} />

         <Route path="/folder/:folderId" component={FolderPage} />
         <Route path="/notes/:noteId" component={NotePage} />
        </section>
      </Switch>
      </NotesContext.Provider>
    </main>
    </>
  );
}
}

export default App;