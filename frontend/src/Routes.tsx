import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { Index } from "./pages/index/index.tsx";
import { Navbar } from "./components/navbar/navbar.tsx";

export function AppRoutes (){
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<><Navbar/><Index/></>}/>
                </Routes>
        </Router>
    )
}