import './Layout.css'
import AddFolder from "../components/AddFolder/AddFolder";
import Main from "../components/Main/Main";

export default function Layout() {
    return (
        <div>
            <div>Header</div>
            <div className="layout">
                <div className='sideBar'>
                    <AddFolder />
                </div>
                <Main />
            </div>

        </div>
    )
}