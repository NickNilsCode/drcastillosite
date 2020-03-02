import React, { Component } from 'react';
import { ReviewCard } from './';
import { ReviewBanner, Stars, StarImg } from '../styled-components/components/ReviewBanner';
import { Parallax, Slider, H2 } from '../styled-components/global';
import reviewList from '../data/reviewList';

class ReviewBannerComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedReview: 2
    }
  }
  clickReview = (i) => {
    this.setState({
      selectedReview: i
    })
  }
  render(){
    const { selectedReview } = this.state;
    return (
      <Parallax img="/images/testimonial.jpg">
        <ReviewBanner>
          <Slider count={reviewList.length} index={selectedReview}>
            {
              reviewList.map((a,i) => {
                return (
                  <ReviewCard
                    message={a.message}
                    author={a.author}
                    count={reviewList.length}
                    key={i}
                    num={i}
                  />
                )
              })
            }
          </Slider>
        </ReviewBanner>
        <Stars>
          {
            reviewList.map((a,i) => {
              return (
                <StarImg
                  key={i}
                  selected={i == selectedReview}
                  src="/images/reviews.png"
                  onClick={() => {this.clickReview(i)}}
                />
              )
            })
          }
        </Stars>
        <H2 style={{color: "#000"}}>{reviewList[selectedReview].author}</H2>
      </Parallax>
    );
  }
}

export default ReviewBannerComponent;
