import './Files.css'
import axios from 'axios'
import editIcon from '../../assets/edit.png'
import deleteIcon from '../../assets/delete.png'
import { useSearchParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { NewFolderContext } from '../../contex/NewFolderContext'
import FolderInput from '../FolderInput/FolderInput'
import { url } from "../../App"

export default function Files(props) {
    const [folder, setFolder] = useState()
    const [parentFolder, setParentFolder] = useSearchParams()
    const { newFolder, setNewFolder } = useContext(NewFolderContext)

    function handleEdit(name) {
        axios.post(encodeURI(`${url}api/files/edit/`), {
            folderName: folder,
            folderParent: parentFolder.get("folderID"),
            folderNewName: name
        })
            .then(res => {
                console.log(res.data)
                setNewFolder(true)

            }).catch(e => {
                console.log(e)
            })
    }
    function handleDelete(name) {
        axios.post(encodeURI(`${url}api/files/delete/`), {
            folderName: name,
            folderParent: parentFolder.get("folderID")
        })
            .then(res => {
                console.log(res.data)
                setNewFolder(true)

            }).catch(e => {
                console.log(e)
            })
    }
    function getFolderName(e) {
        e.preventDefault()
        const folderName = e.target.elements.folderName.value
        handleEdit(folderName);
    }

    return (
        <div className='folderOutBox'>
            <div className='folderInBox'>
                <div onClick={props.onClick}>
                    {props.children}
                </div>
                <div className='folderIcons'>
                    <img className='deleteEdit' src={editIcon} alt={editIcon} onClick={() => folder ? setFolder() : setFolder(props.children)} />
                    <img className='deleteEdit' src={deleteIcon} alt={deleteIcon} onClick={() => handleDelete(props.children)} />
                </div>
            </div>
            {folder && <FolderInput value="Rename" onSubmit={getFolderName} >New name:</FolderInput>}
        </div>
    )
}