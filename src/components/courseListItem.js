import React from 'react'

const CourseListItem = ({ course, onCourseSelect }) => {
  return <li
    onClick={ () => onCourseSelect(course) }
    className="list-group-item btn btn-light">{ course.name }</li>
}

export default CourseListItem