import './AllContent.css'
import Folders from '../../components/Folders/Folders';
import Files from '../../components/Files/Files';

import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { NewFolderContext } from '../../contex/NewFolderContext'
import { url } from "../../App"


export default function AllContent() {
    const [parentFolder, setParentFolder] = useSearchParams()
    const { newFolder, setNewFolder } = useContext(NewFolderContext)

    const [files, setFiles] = useState([])
    const [folders, setFolders] = useState([])
    useEffect(() => {
        fetch(encodeURI(`${url}api/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => {
                setFiles(data.filter(data => data.type !== "folder").map(data => data.name + "." + data.type))
                setFolders(data.filter(data => data.type === "folder").map(data => data.name))
            })
        setNewFolder()

    }, [parentFolder, newFolder])
    console.log({ files });
    console.log({ folders });

    return (
        <div>
            <div className="outbox">
                <div className="inbox">
                    {/* {folders.length > 0 && <Folders data={folders} />} */}
                    < br />
                    {files.length > 0 && <Files data={files} />}

                </div>

            </div>
        </div>
    )
}