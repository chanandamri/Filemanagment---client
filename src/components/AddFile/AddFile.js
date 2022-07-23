import Fileupload from '../FileUpload/Fileupload'
import './AddFile.css'

import axios from 'axios'
import { useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import plus from '../../assets/plus.png'
import { NewFolderContext } from '../../contex/NewFolderContext'

export default function AddFile() {
    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    const [active, setActive] = useState()
    const [parentFolder, setParentFolder] = useSearchParams()
    function addFolder(name) {
        //     axios.post(`http://localhost:3001/api/folders/create/`, {
        //         folderName: name,
        //         folderParent: parentFolder.get("folderID")
        //     })
        //         .then(res => {
        //             console.log(res.data)
        //             setActive(false);
        //             setNewFolder(true)

        //         }).catch(e => {
        //             console.log(e)
        //         })
        // }
        // function getFileName(e) {
        //     e.preventDefault()
        //     const folderName = e.target.elements.folderName.value
        //     addFolder(folderName);
    }
    return (<div className="addButtonBox" onClick={() => setActive(true)}>
        <div className="addButton">
            <img className='plusImg' src={plus} alt={plus} /><div>New file</div>
        </div>
        {active && <Fileupload value="Create"  >Name:</Fileupload>}
    </div>
    )
}