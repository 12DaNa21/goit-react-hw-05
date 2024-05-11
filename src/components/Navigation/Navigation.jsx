import { NavLink } from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import css from './Navigation.module.css'
import clsx from 'clsx'

const getNavLinkClass = ({isActive}) => {
    return (clsx(css.link, isActive && css.active))
}
export default function Navigation(){

    return (
        <nav className={css.nav}>
            <NavLink to="/" className={getNavLinkClass}><FaHome />Home</NavLink>
            <NavLink to="/movies" className={getNavLinkClass}><BiCameraMovie />Movies</NavLink>
        </nav>
    )
}