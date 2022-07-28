import { Route, Routes } from "react-router-dom";
import AllContent from "../../pages/AllContent/AllContent";

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={<AllContent />} />
        </Routes>
    )
}