import React from 'react';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('hi');
    this.setState({
      liked: !this.state.liked
    });
  }

  render() {
    const label = this.state.liked ? 'Unlike' : 'Like'
    return (

        <button className="btn btn-info" onClick={this.handleClick}>
          {label}</button>

    );
  }
}
export default LikeButton;
