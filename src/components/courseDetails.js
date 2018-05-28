import React from 'react'

const CourseDetails = ({ course }) => {

  if (!course) {
    return <div>Loading...</div>
  }

  return <div className="col-md-8">
    <h1>{ course.name }</h1>
    <p>{ course.description }</p>
  </div>
}

export default CourseDetails