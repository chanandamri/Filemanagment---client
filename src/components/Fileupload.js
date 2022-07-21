import { useState } from "react";

export default function Fileupload() {
    const [file, setFile] = useState()
    function onchange(e) {
        console.log(e.target.files);
        const filedata = e.target.files[0]
        setFile(filedata)
    }
    function onsubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append("fileName", file);
        console.log(formData);
        fetch(
            "api", {
            method: "post",
            body: formData
        }
        )

    }
    return (
        <div>
            <form onSubmit={onsubmit}>
                <input type="file" onChange={onchange} />
                <button >submit</button>
            </form>
            {file && <div>
                <p> file name: {file.name}</p>
                <p>file type: {file.type}</p>
                <p>file name: {file.size / 1000}kb</p>
            </div>}
        </div>
    )

}