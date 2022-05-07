import React from 'react'
import PropTypes from 'prop-types'
import { List } from './styles'

import ComicCard from '../../components/ComicCard'

const ComicList = ({ comics, onClick }) => {
  return (
    <List>
      { comics.map((comic, index) => (
        <ComicCard key={ index } comic={ comic } onClick={ () => onClick(comic?.id) } />
      )) }
    </List>
  )
}

ComicList.propTypes = {
  onClick: PropTypes.func,
  comics: PropTypes.array,
}

ComicList.defaultProps = {
  onClick: () => {},
  comics: []
}

export default ComicList