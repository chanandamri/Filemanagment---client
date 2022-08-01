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

    const [serverData, setServerData] = useState()
    useEffect(getData, [parentFolder, newFolder])

    function getData() {
        fetch(encodeURI(`${url}api/all/`) + parentFolder.get("folderID"))
            .then(response => response.json())
            .then(data => setServerData(data))
        // let test = data.filter(data => data.type === "folder").map(data => data.name)

        console.log({ serverData });
        // console.log({ test });
        console.log("all data (folders and files): " + serverData);
        setNewFolder()
    }
    console.log(serverData);
    return (
        <div>
            <div className="outbox">
                <div className="inbox">
                    <Folders data={serverData} /> {/*data={data.filter(data => data.type === "folder").map(data => data.name)} /> */}
                    < br />
                    <Files />
                    {/* data={data.filter(data => data.type !== "folder")} /> */}
                </div>

            </div>
        </div>
    )
}