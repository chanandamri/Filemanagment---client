import './Header.css'
import arrow from '../../assets/arrow.jpg'
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";


export default function Header() {
    const [parentFolder, setParentFolder] = useSearchParams()
    const [folders, setFolders] = useState([])
    function createFolderLogic() {
        let tempFolders = parentFolder.get("folderID").split("/")
        for (let i in tempFolders) {
            if (i != 0) tempFolders[i] = tempFolders[i - 1] + "/" + tempFolders[i]
        }
        setFolders(tempFolders)

    }
    useEffect(createFolderLogic, [parentFolder])
    console.log(folders, parentFolder.get("folderID"));
    return (
        <div className='headerBar'>
            <div className='headerInternal'>
                {folders.map(folder => <Link className="headerLink" to={"?folderID=" + folder} >
                    {folder.substring(folder.lastIndexOf("/") + 1)}
                    <img src={arrow} alt={arrow} className={folder == parentFolder.get("folderID") ? "arrowRotated" : "arrowNormal"} />
                </Link>)
                }
            </div>
        </div >
    )
}