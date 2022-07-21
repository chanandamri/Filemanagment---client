import axios from 'axios'
import { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import plus from '../../assets/plus.png'
import { NewFolderContext } from '../../contex/NewFolderContext'
import FolderInput from '../FolderInput/FolderInput'
import "./AddFolder.css"

export default function AddFolder() {
    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    const [active, setActive] = useState()
    const [parentFolder, setParentFolder] = useSearchParams()
    function addFolder(name) {
        axios.post(`http://localhost:3001/api/folders/create/`, {
            folderName: name,
            folderParent: parentFolder.get("folderID")
        })
            .then(res => {
                console.log(res.data)
                setActive(false);
                setNewFolder(true)

            }).catch(e => {
                console.log(e)
            })
    }
    function getFolderName(e) {
        e.preventDefault()
        const folderName = e.target.elements.folderName.value
        addFolder(folderName);
    }
    return (<div className="addButtonBox" onClick={() => setActive(true)}>
        <div className="addButton">
            <img className='plusImg' src={plus} alt={plus} /><div>New folder</div>
        </div>
        {active && <FolderInput value="Create" onSubmit={getFolderName} >Name:</FolderInput>}
    </div>
    )
}