import { useState } from 'react';
import './App.css';
import { NewFileContext, NewFolderContext } from './contex/NewFolderContext';
import Layout from './Layout/Layout';

function App() {
  const [newFolder, setNewFolder] = useState()
  const [newFile, setNewFile] = useState()
  return (
    <div >
      <NewFileContext.Provider value={{ newFile, setNewFile }}>
        <NewFolderContext.Provider value={{ newFolder, setNewFolder }}>
          <Layout />
        </NewFolderContext.Provider>
      </NewFileContext.Provider>
    </div>
  );
}

export default App;
