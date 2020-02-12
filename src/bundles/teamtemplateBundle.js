import React from 'react';
import { hydrate, render } from 'react-dom';
import Teamtemplate from '../pages/TeamtemplatePage';

if (window)
  render(
    <Teamtemplate data={window.__DATA__} />,
    document.getElementById('app')
  );
