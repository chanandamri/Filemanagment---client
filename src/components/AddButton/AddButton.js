import './AddButton.css'
import { useState } from 'react'
import plus from '../../assets/plus.png'
import AddFile from '../AddFile/AddFile'
import AddFolder from '../AddFolder/AddFolder'
import FolderInput from '../FolderInput/FolderInput'
export default function AddButton() {
    const [active, setActive] = useState()
    return (
        <div onClick={() => setActive(true)}>
            <div >
                <img className='plusImg' src={plus} alt={plus} />
            </div>
            {active &&
                <div className='fullScreen'>
                    <AddFolder value="Create" />
                    <AddFile />
                </div>}
        </div>)
}