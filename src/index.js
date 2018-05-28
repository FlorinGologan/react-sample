import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchBar from './components/searchBar'
import CourseList from './components/courseList'
import CourseDetails from './components/courseDetails'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      courses: [],
      course: null
    }

    this.courseSearch()
  }

  courseSearch (query = '') {
    axios.get('http://localhost:3000/courses', {
      params: { name_like: query }
    }).then(response => {
      this.setState({
        courses: response.data,
        course: response.data[0]
      })
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          onSearchChange={ query => this.courseSearch(query) }/>
        <div className="row">
          <CourseList
            onCourseSelect={ course => this.setState({ course }) }
            courses={ this.state.courses }/>
          <CourseDetails course={ this.state.course }/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('.container'))