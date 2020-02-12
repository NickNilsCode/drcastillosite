import React from 'react';
import { hydrate, render } from 'react-dom';
import Team from '../pages/TeamPage';

if (window)
  render(
    <Team data={window.__DATA__} />,
    document.getElementById('app')
  );
