import React from 'react';
import { hydrate, render } from 'react-dom';
import Procedurestemplate from '../pages/ProcedurestemplatePage';

if (window)
  render(
    <Procedurestemplate data={window.__DATA__} />,
    document.getElementById('app')
  );
