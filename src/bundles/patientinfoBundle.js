import React from 'react';
import { hydrate, render } from 'react-dom';
import Patientinfo from '../pages/PatientinfoPage';

if (window)
  render(
    <Patientinfo data={window.__DATA__} />,
    document.getElementById('app')
  );
