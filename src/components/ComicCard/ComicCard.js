import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { Card, Thumbnail, Title } from './styles'

const ComicCard = ({ comic, onClick }) => {
  const thumbnail = useMemo(() => {
    return `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
  }, [comic])

  return (
    <Card onClick={ onClick }>
      <Thumbnail src={ thumbnail } alt={ comic?.title } />
      <Title>{ comic?.title }</Title>
      <p>Code: { comic?.id }</p>
    </Card>
  )
}

ComicCard.propTypes = {
  onClick: PropTypes.func,
  comic: PropTypes.object.isRequired,
}

ComicCard.defaultProps = {
  onClick: () => {}
}

export default ComicCard