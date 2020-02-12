import React from 'react';
import { hydrate, render } from 'react-dom';
import Servicestemplate from '../pages/ServicestemplatePage';

if (window)
  render(
    <Servicestemplate data={window.__DATA__} />,
    document.getElementById('app')
  );
