import './FolderInput.css'
export default function FolderInput(props) {
    return (
        <form className='form' onSubmit={props.onSubmit}>
            <label className='inputLabel'>
                {props.children}
                <input name='folderName' className='inputInput' type={"text"} required />
                <input type="submit" value="Create" />
            </label>
        </form>
    )
}