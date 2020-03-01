import React, { Component } from 'react';
import { BlogCard, TextBox } from '../styled-components/components/BlogCard';
import { Para, H2, H6 } from '../styled-components/global';

class BlogCardComponent extends Component {
  render(){
    const { link, img, author, title, blurb } = this.props;
    return (
      <BlogCard style={{backgroundImage: `url(${img})`}}>
        <TextBox className="textBox">
          <H2>{title}</H2>
          <H6>by {author}</H6>
          <Para>{blurb}</Para>
          <a href={link}>
            <H2>READ MORE <i className="fas fa-long-arrow-alt-right"></i></H2>
          </a>
        </TextBox>
      </BlogCard>
    );
  }
}

export default BlogCardComponent;
