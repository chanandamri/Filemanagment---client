import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export default function Header() {
    const [parentFolder, setParentFolder] = useSearchParams()
    const [folders, setFolders] = useState([])
    function createFolderLogic() {
        console.log(parentFolder.get("folderID"));
        setFolders(parentFolder.get("folderID").split("/"))
        console.log(folders);
    }
    useEffect(createFolderLogic, [parentFolder])

    return (<div>

        {folders.map(folder => <span key={folder}>{folder}</span>)}
    </div>
    )
}

