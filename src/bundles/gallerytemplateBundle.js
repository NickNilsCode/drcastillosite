import React from 'react';
import { hydrate, render } from 'react-dom';
import Gallerytemplate from '../pages/GallerytemplatePage';

if (window)
  render(
    <Gallerytemplate data={window.__DATA__} />,
    document.getElementById('app')
  );
