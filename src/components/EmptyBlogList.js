import React, { Component } from 'react';
import { BlogCard } from './'
import { BlogList } from '../styled-components/components/EmptyBlogList';
import { FlexWrap } from '../styled-components/global';
import blogList from '../data/blogList';

class BlogListComponent extends Component {
  render(){
    return (
      <BlogList>
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
      </BlogList>
    );
  }
}

export default BlogListComponent;
