import './FileUpload.css'
import { useState } from "react";
import axios from 'axios';

export default function Fileupload() {
    const [file, setFile] = useState()
    function onchange(e) {
        console.log(e.target.files);
        const filedata = e.target.files[0]
        setFile(filedata)
    }
    function onsubmit(e) {
        e.preventDefault()
        let formData = new FormData();
        formData.append("fileName", file);
        // formData.append('file', file);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

        axios.post(
            `http://localhost:3001/api/files/create/`, { formData }
        )

    }
    return (
        <div className='fileOutBox'>
            <form className='form' onSubmit={onsubmit}>
                <input type="file" name="file" onChange={onchange} />
                <button >submit</button>
            </form>
            {file && <div className="uploadData">
                <p> file name: {file.name}</p>
                <p>file type: {file.type}</p>
                <p>file name: {file.size / 1000}kb</p>
            </div>}
        </div>
    )

}
