import React, { Component } from 'react';
import { DentistLine, BlogCard } from './'
import { BlogList } from '../styled-components/components/BlogList';
import { Para, H2BannerTitle, Button, Description, HashMark, FlexWrap } from '../styled-components/global';
import blogList from '../data/blogList';

class BlogListComponent extends Component {
  render(){
    return (
      <BlogList>
        <Description>
          <HashMark id="blog" />
          <H2BannerTitle>Latest Blog Posts</H2BannerTitle>
          <hr className="line"/>
          <Para>Our practice prides itself on providing the very finest level of service, from a simple filling to complex cosmetic dentistry.</Para>
        </Description>
        <FlexWrap>
          {
            blogList.map((a,i) => {
              return (
                <BlogCard
                  key={i}
                  link={a.link}
                  img={a.img}
                  title={a.title}
                  author={a.author}
                  blurb={a.blurb}
                />
              )
            })
          }
        </FlexWrap>
        <a href="/blog">
          <Button
            color1="#fff"
            color2="#27b1d2"
            color3="#27b1d2"
            style={{ marginBottom: '24px' }}
          >See Full Blog Page</Button>
        </a>
        <DentistLine/>
      </BlogList>
    );
  }
}

export default BlogListComponent;
