import { NavLink, Outlet } from "react-router-dom";
import Breadcrums from "../Component/Breadcrums";

export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Job-a-router</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                </nav>
            </header> 
            <Breadcrums />
            <main>
                <Outlet />
            </main>
        </div>
    )
}