import React from 'react';
import { hydrate, render } from 'react-dom';
import Drcastillo from '../pages/DrcastilloPage';

if (window)
  render(
    <Drcastillo data={window.__DATA__} />,
    document.getElementById('app')
  );
