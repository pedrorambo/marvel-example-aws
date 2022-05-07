import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { Container } from './styles'

const applyDefaultLayout = Component => props => (
  <>
    <Header />
    <Container>
      <Component { ...props } />
    </Container>
    <Footer />
  </>
)

export default applyDefaultLayout