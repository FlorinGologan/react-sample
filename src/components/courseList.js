import React from 'react'
import CourseListItem from './courseListItem'

const CourseList = ({ courses, onCourseSelect }) => {

  const courseItems = courses.map((course) => {
      return <CourseListItem
        onCourseSelect={ onCourseSelect }
        key={ course.id }
        course={ course }/>
    }
  )

  return (
    <ul className="col-md-4 list-group">
      { courseItems }
    </ul>
  )
}

export default CourseList