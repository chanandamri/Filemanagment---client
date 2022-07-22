import AddFile from '../AddFile/AddFile'
import AddFolder from '../AddFolder/AddFolder'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <AddFolder />
            <AddFile />
        </div>
    )

}