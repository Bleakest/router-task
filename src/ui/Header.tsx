import { Link, NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='flex space-x-4 justify-center py-6 text-center bg-stone-900'>
                <NavLink className={({ isActive }) => {
                    return isActive ? 'activeLink' : "notActiveLink"
                }} to='/'>Main</NavLink>
                <NavLink className={({ isActive }) => {
                    return isActive ? 'activeLink' : "notActiveLink"
                }} to='/characters'>Heroes</NavLink>

                <NavLink className={({ isActive }) => {
                    return isActive ? 'activeLink' : "notActiveLink"
                }} to='/locations'>Locations</NavLink>
                <NavLink className={({ isActive }) => {
                    return isActive ? 'activeLink' : "notActiveLink"
                }} to='/episodes'>Episodes</NavLink>
            </nav>
        </>
    )
}

export default Header