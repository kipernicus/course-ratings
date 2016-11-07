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
      ratings: [
        {courseId: '12345', rating: 3}
      ]
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ratings: [...this.state.ratings, { course: name, rating: nextValue }]})
  }

  render() {
    return (
      <ul style={{listStyle: 'none'}}>
        <li>
          <select>
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
            const courseName = this.state.courses.find((course) => rating.courseId === course.id).name;
            return <li key={rating.courseId}>
              <span style={{marginRight: '10px'}}>{courseName}</span>
              <StarRatingComponent
                name={rating.courseId}
                value={rating.rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </li>
          })
        }
      </ul>
    )
  }
}