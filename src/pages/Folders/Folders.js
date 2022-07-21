import './Folders.css'
import { useContext, useEffect, useState } from "react";
import Folder from "../../components/Folder/Folder";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NewFolderContext } from '../../contex/NewFolderContext';

export default function Folders() {
    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    let navigate = useNavigate()
    // const [parentFolder, setParentFolder] = useState('root')
    const [parentFolder, setParentFolder] = useSearchParams()
    const [folders, setFolders] = useState()
    function getFolders() {
        fetch(`http://localhost:3001/api/folders/all/` + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setFolders(data.sort((a, b) => a - b)))
        setNewFolder(false)
    }

    useEffect(getFolders, [parentFolder, newFolder])

    function onClick(name) {
        const newFolder = parentFolder + `***${name}`
        navigate("?" + newFolder)

    }

    if (!folders) return <div>Loading</div>
    if (folders.length === 0) return <div></div>
    return (
        <div>
            <div className="outbox">
                <div className="inbox">
                    {
                        folders.map(folder => {
                            return (
                                <Folder key={folder} onClick={() => onClick(folder)}>{folder}</Folder>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}