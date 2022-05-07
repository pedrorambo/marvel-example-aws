import React from 'react'

import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/logo.svg'

import { CustomHeader, CustomLogo } from './styles'

const Header = () => {
  const navigate = useNavigate()

  return (
    <CustomHeader>
      <CustomLogo onClick={ () => navigate('/') } src={ Logo } alt="Marvel" />
    </CustomHeader>
  )
}

export default Header