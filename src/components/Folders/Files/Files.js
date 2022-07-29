import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { NewFolderContext } from '../../../contex/NewFolderContext'
import Folder from '../../Folder/Folder'
import './Files.css'



export default function Files() {
    const url = "https://chanandrive.herokuapp.com/"
    const [parentFolder, setParentFolder] = useSearchParams()
    const { newFolder, setNewFolder } = useContext(NewFolderContext)

    const [files, setFiles] = useState()
    useEffect(getFiles, [parentFolder, newFolder])

    function getFiles() {
        fetch(encodeURI(`${url}api/files/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setFiles(data.sort((a, b) => a - b)))
        setNewFolder()

    }
    if (!files) return <div>Loading</div>
    if (files.length === 0) return <div></div>

    return (
        <div>
            Files
            {
                files.map(file => {
                    return (
                        <Folder key={file} >{file}</Folder>
                    )
                })
            }

        </div>
    )
}