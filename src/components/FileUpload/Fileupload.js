import './FileUpload.css'
import { useContext, useState } from "react";
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { NewFolderContext } from '../../contex/NewFolderContext';
import { url } from "../../App"

export default function Fileupload() {
    const [parentFolder, setParentFolder] = useSearchParams()
    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    const [file, setFile] = useState()

    function onchange(e) {
        console.log(e.target.files);
        const filedata = e.target.files[0]
        setFile(filedata)
    }
    function onsubmit(e) {
        e.preventDefault()
        let formData = new FormData();
        formData.append("fileName", file);
        formData.append("folderParent", parentFolder.get("folderID"))
        axios.post(
            encodeURI(`${url}api/files/create/`), formData
        )
            .then(res => {
                console.log(res.data)
                setFile(false);
                setNewFolder(true)

            }).catch(e => {
                console.log(e)
            })

    }
    return (
        <div className='fileOutBox'>
            <form className='form' onSubmit={onsubmit}>
                <input className='inputfile' type="file" name="file" onChange={onchange} />
                <button >submit</button>
            </form>
            {file && <div className="uploadData">
                <p> file name: {file.name}</p>
                <p>file type: {file.type}</p>
                <p>file name: {file.size / 1000}kb</p>
            </div>}
        </div>
    )

}
