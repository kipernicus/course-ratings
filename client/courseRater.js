import React from 'react'
import StarRatingComponent from 'react-star-rating-component'

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      courses: [
        {id: '12345', name: 'Intro to Intros'},
        {id: '23456', name: 'Intermediate Intermediaries'},
        {id: '34567', name: 'Advanced Advancements'}
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