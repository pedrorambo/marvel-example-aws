import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Card, Thumbnail, Title } from './styles'

const CharacterCard = ({ comic, onClick }) => {
  const thumbnail = useMemo(() => {
    return `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
  }, [comic])

  return (
    <Card onClick={ onClick }>
      <Thumbnail src={ thumbnail } alt={ comic?.title } />
      <Title>{ comic?.name }</Title>
    </Card>
  )
}

CharacterCard.propTypes = {
  onClick: PropTypes.func,
  comic: PropTypes.object.isRequired,
}

CharacterCard.defaultProps = {
  onClick: () => {}
}

export default CharacterCard