import { useState } from 'react';
import './App.css';
import { NewFolderContext } from './contex/NewFolderContext';
import Layout from './Layout/Layout';

function App() {
  const [newFolder, setNewFolder] = useState()
  return (
    <div >
      <NewFolderContext.Provider value={{ newFolder, setNewFolder }}>
        <Layout />
      </NewFolderContext.Provider>
    </div>
  );
}

export default App;
