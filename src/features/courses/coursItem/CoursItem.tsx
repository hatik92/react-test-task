import { FC } from "react";
import { CoursItemType } from "../coursesSlice";
import './CoursItem.module.sass'
import s from './CoursItem.module.sass'

type Props = {
  courses: CoursItemType[]
}


const CoursItem: FC<Props> = ({courses}) => {

  return (<>
    <div className={s.coursItem}>
      {courses.map((cours: CoursItemType) => <div className={s.item}>
        <h1>{cours.name}</h1>
      </div>)}

    </div>
  </>)
}

export default CoursItem


