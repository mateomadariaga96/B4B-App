import React from 'react'
import B4BService from '../services/B4BService'

class ProdLikeBtn extends React.Component {
  state = {
    productlikes: this.props.productlikes.length
  }

  handleClick = (event) => {
    B4BService.likeProduct(this.props.oppId)
      .then(response => {
        this.setState({
          productlikes: this.state.productlikes + response.data.productlikes
        })
      })
  }

  render() {
    return (
      <div className="LikeBtn">
        <button className="btn btn-sm mb-2 btn-outline-danger" onClick={this.handleClick}>
          <i className="fa fa-heart mr-2"></i>
          <span className="likes-count">{this.state.productlikes}</span> likes
            </button>
      </div>
    )
  }
}

export default ProdLikeBtn