import React from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'
import { courses } from './courses'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: courses,
      ratings: [ ],
      email: ''
    };
  }

  updateEmail(e) {
    this.setState({ 'email': e.target.value , 'ratings': []})
  }

  addCourse(e) {
    this.setState({ratings: [...this.state.ratings, { courseId: e.target.value, rating: 0 }]})
  }

  rateCourse(nextValue, prevValue, id) {
    axios.put('https://facj26md10.execute-api.us-west-2.amazonaws.com/dev/ratings/MONSTERS/${id}', { 'rating': nextValue, 'email': this.state.email })
      .then(() => {
        const rating = this.state.ratings.find((rating) => rating.courseId === id);
        rating.rating = nextValue;
        this.setState({ratings: this.state.ratings})
      })
  }

  render() {
    return (
      <ul style={{listStyle: 'none'}}>
        <li style={{marginBottom: '20px'}}>
          Enter your email <input type="text" onChange={this.updateEmail.bind(this)}/>
        </li>
        <li>
          <select style={{marginBottom: '20px'}} onChange={this.addCourse.bind(this)}>
            <option>Pick a Course</option>
            {
              this.state.courses.map( (course) => {
                return <option key={course.id} value={course.id}>{course.name}</option>
              })
            }
          </select>
        </li>
        {
          this.state.ratings.map( (rating) => {
            const course = this.state.courses.find((course) => rating.courseId === course.id);
            const courseName = course ? course.name : 'No course found';
            return <li key={rating.courseId}>
              <span style={{float: 'left', width: '200px'}}>{courseName}</span>
              <StarRatingComponent
                name={rating.courseId}
                value={rating.rating}
                onStarClick={this.rateCourse.bind(this)}
              />
            </li>
          })
        }
      </ul>
    )
  }
}