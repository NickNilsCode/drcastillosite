import React, { Component } from 'react';
import { ReviewCard, GiantQuotes, ReviewP } from '../styled-components/components/ReviewCard';


class ReviewCardComponent extends Component {
  render(){
    const { message, author, num, count } = this.props;
    return (
      <ReviewCard count={count}>
        <GiantQuotes><i className="fas fa-quote-left"></i></GiantQuotes>
        <ReviewP>{message}</ReviewP>
      </ReviewCard>
    );
  }
}

export default ReviewCardComponent;
