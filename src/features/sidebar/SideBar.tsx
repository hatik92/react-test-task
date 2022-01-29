import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './sidebar.module.sass'
import s from './sidebar.module.sass'
import homeIcon from '../../assets/sidebarIcon/dashboard-interfaceActive.svg'
import shoppingListIcon from '../../assets/sidebarIcon/shopping-list.svg'
import customerIcon from '../../assets/sidebarIcon/customer.svg'

const Sidebar: FC<any> = () => {

  
  return (<>

    <nav className={s.sidebar}>
      
      <ul>
        <li>
          <NavLink
          to="/"
          className={({ isActive }) => isActive ? s.activeLink : ''}
          >
            <img src={homeIcon} className={s.svgColor} alt="" /></NavLink>
        </li>
        <li>
          <NavLink
            to="/shopping-list"
            className={({ isActive }) => isActive ? s.activeLink : ''}
            >
            <img src={shoppingListIcon} className={s.svgColor} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customer"
            className={({ isActive }) => isActive ? s.activeLink : ''}
            >
            <img src={customerIcon} className={s.svgColor} alt="" />
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className={s.outlet}>
      <Outlet />
    </div>
  </>)
}

export default Sidebar