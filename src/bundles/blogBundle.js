import React from 'react';
import { hydrate, render } from 'react-dom';
import Blog from '../pages/BlogPage';

if (window)
  render(
    <Blog data={window.__DATA__} />,
    document.getElementById('app')
  );
