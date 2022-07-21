import { Route, Routes } from "react-router-dom";
import Folders from "../../pages/Folders/Folders";

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<Folders />} />
        </Routes>
    )
}