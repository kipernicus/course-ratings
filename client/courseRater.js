import React from 'react'
import axios from 'axios'
import StarRatingComponent from 'react-star-rating-component'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: [
        {id: '635de2ee-cfda-459a-9e8e-dff590f76e42', name: 'Advanced Advancements'},
        {id: '37c82b8d-dbd9-4aa4-869d-47c325efd38a', name: 'An Overview of Overviews'},
        {id: 'f429e95c-b4c4-4724-a3e4-1b2ffce82278', name: 'Beginnings for Beginners'},
        {id: 'fa96b764-87a4-4757-90c8-26e214c5cfea', name: 'Intermediate Intermediaries'},
        {id: 'd5a72023-63b2-2491-8a33-6762ef189d34', name: 'Intro to Intros'}
      ],
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

  rateCourse(nextValue, prevValue, name) {
    const rating = this.state.ratings.find((rating) => rating.courseId === name);
    rating.rating = nextValue;
    this.setState({ratings: this.state.ratings})
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