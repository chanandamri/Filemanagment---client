import { useContext, useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { NewFolderContext } from "../../contex/NewFolderContext"
import Folder from "../Folder/Folder"
import { url } from "../../App"
export default function Folders() {

    // const url = "https://chanandrive.herokuapp.com/"
    const { newFolder, setNewFolder } = useContext(NewFolderContext)
    let navigate = useNavigate()
    const [parentFolder, setParentFolder] = useSearchParams()
    const [folders, setFolders] = useState()

    function getFolders() {
        fetch(encodeURI(`${url}api/folders/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setFolders(data.sort((a, b) => a - b)))
        setNewFolder()
    }

    useEffect(getFolders, [parentFolder, newFolder])
    function onClick(name) {
        console.log(parentFolder);
        const newFolder = decodeURIComponent(parentFolder + `/${name}`)
        console.log("new folder route: " + newFolder);
        navigate("?" + newFolder)
    }
    if (!folders) return <div>Loading</div>
    if (folders.length === 0) return <div></div>

    return (
        <div>
            Folders
            {
                folders.map(folder => {
                    return (
                        <Folder key={folder} onClick={() => onClick(folder)}>{folder}</Folder>
                    )
                })
            }
        </div>
    )
}