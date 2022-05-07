import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import ComicsPage from '../pages/ComicsPage'
import ComicDetailsPage from '../pages/ComicDetailsPage'

const ReactRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <ComicsPage /> } />
      <Route exact path="/comic/:id" element={ <ComicDetailsPage /> } />
    </Routes>
  </BrowserRouter>
)

export default ReactRoutes