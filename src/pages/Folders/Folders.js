import './Folders.css'
import { useContext, useEffect, useState } from "react";
import Folder from "../../components/Folder/Folder";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { NewFolderContext } from '../../contex/NewFolderContext';

export default function Folders() {
    const url = "https://chanandrive.herokuapp.com/"
    console.log("env url " + url);

    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    let navigate = useNavigate()
    const [parentFolder, setParentFolder] = useSearchParams()
    const [folders, setFolders] = useState()
    const [files, setFiles] = useState()
    function getFiles() {
        fetch(encodeURI(`${url}api/files/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setFiles(data.sort((a, b) => a - b)))
        setNewFolder()

    }

    function getFolders() {
        fetch(encodeURI(`${url}api/folders/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setFolders(data.sort((a, b) => a - b)))
        setNewFolder()
    }

    useEffect(getFolders, [parentFolder, newFolder])
    useEffect(getFiles, [parentFolder, newFolder])
    console.log(files);
    function onClick(name) {
        console.log(parentFolder);
        const newFolder = parentFolder + `/${name}`
        console.log({ newFolder });
        navigate("?" + newFolder)

    }

    if (!folders || !files) return <div>Loading</div>
    if (folders.length === 0 && files.length === 0) return <div></div>
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
                    <br />
                    {
                        files.map(file => {
                            return (
                                <Folder key={file} >{file}</Folder>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}