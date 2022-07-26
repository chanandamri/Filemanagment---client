import './Layout.css'
import AddFolder from "../components/AddFolder/AddFolder";
import Main from "../components/Main/Main";
import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Header.js/Header';

export default function Layout() {
    return (
        <div>
            <div><Header /></div>
            <div className="layout">
                <SideBar />
                <Main />
            </div>

        </div>
    )
}