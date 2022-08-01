import AddButton from '../AddButton/AddButton'
import AddFile from '../AddFile/AddFile'
import AddFolder from '../AddFolder/AddFolder'
import './SideBar.css'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <AddButton />
            {/* <AddFolder />
            <AddFile /> */}
        </div>
    )

}