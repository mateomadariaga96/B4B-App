import React from 'react'
import B4BService from '../services/B4BService'

class LikeBtn extends React.Component {
  state = {
    likes: this.props.likes.length
  }

  handleClick = (event) => {
    B4BService.likeOpportunity(this.props.oppId)
      .then(response => {
        this.setState({
          likes: this.state.likes + response.likes
        })
      })
  }

  render() {
    return (
      <div className="LikeBtn">
        <button className="btn btn-sm mb-2 btn-outline-danger" onClick={this.handleClick}>
          <i className="fa fa-heart mr-2"></i>
          <span className="likes-count">{this.state.likes}</span> likes
            </button>
      </div>
    )
  }
}

export default LikeBtn