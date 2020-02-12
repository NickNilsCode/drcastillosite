import React from 'react';
import { hydrate, render } from 'react-dom';
import Services from '../pages/ServicesPage';

if (window)
  render(
    <Services data={window.__DATA__} />,
    document.getElementById('app')
  );
