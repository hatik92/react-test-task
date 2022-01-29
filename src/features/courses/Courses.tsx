import { FC } from "react";
import { NavLink } from "react-router-dom";
import Scrollbar from "react-scrollbars-custom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import './Courses.module.sass'
import s from './Courses.module.sass'
import { selectCourses, sortByFavorite, sortByNew, sortByPopular } from "./coursesSlice";
import CoursItem from "./coursItem/CoursItem";


const Courses: FC<any> = () => {
  const contentCourses = useAppSelector(selectCourses)
  const dispatch = useAppDispatch()
  console.log(contentCourses);;

  return (<>
    <div className={s.coursesHeader}>
      <header className={s.courses}>
        <div className={s.title}>Courses</div>
        <div className={s.sort}>
          <ul>
            <li>
              <NavLink
              className={({ isActive }) => isActive ? s.activeLink : ''}
              to="/popular" onClick={() => dispatch(sortByPopular())}>
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
              className={({ isActive }) => isActive ? s.activeLink : ''}
              to="/favorite"  onClick={() => dispatch(sortByFavorite())}>
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
              className={({ isActive }) => isActive ? s.activeLink : ''}
              to="/new"  onClick={() => dispatch(sortByNew())}>
                New
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Scrollbar style={{ height: 600 }}>
        <CoursItem courses={contentCourses} />
      </Scrollbar>
    </div>
  </>)
}

export default Courses