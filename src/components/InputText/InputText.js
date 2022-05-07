import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Container, CustomInput, CustomLabel } from './styles'

const InputText = ({
  label,
  name,
  value,
  placeholder,
  onChange
}) => {
  const handleChange = useCallback((event) => {
    const { name, value } = event?.target
    onChange(name, value)
  }, [onChange])

  return (
    <Container>
      { label && (<CustomLabel>{ label }</CustomLabel>) }
      <CustomInput 
        placeholder={ placeholder } 
        value={ value } 
        name={ name } 
        onChange={ handleChange } 
      />
    </Container>
  )
}

InputText.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

InputText.defaultProps = {
  onChange: () => {}
}

export default InputText