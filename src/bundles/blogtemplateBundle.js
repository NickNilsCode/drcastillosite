import React from 'react';
import { hydrate, render } from 'react-dom';
import Blogtemplate from '../pages/BlogtemplatePage';

if (window)
  render(
    <Blogtemplate data={window.__DATA__} />,
    document.getElementById('app')
  );
