import React from 'react';
import { hydrate, render } from 'react-dom';
import Gallery from '../pages/GalleryPage';

if (window)
  render(
    <Gallery data={window.__DATA__} />,
    document.getElementById('app')
  );
