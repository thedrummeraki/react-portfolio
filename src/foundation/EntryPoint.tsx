import React from 'react';
import { MainRoutes, ProjectRoutes } from 'foundation';
import { BrowserRouter } from 'react-router-dom';

export function EntryPoint() {
  return (
    <BrowserRouter>
      <MainRoutes />
      <ProjectRoutes />
    </BrowserRouter>
  )
}
