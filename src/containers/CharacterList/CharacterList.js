import React from 'react'
import PropTypes from 'prop-types'
import { List } from './styles'

import CharacterCard from '../../components/CharacterCard'

const CharacterList = ({ comics, onClick }) => {
  return (
    <List>
      { comics.map((comic, index) => (
        <CharacterCard key={ index } comic={ comic } onClick={ () => onClick(comic?.id) } />
      )) }
    </List>
  )
}

CharacterList.propTypes = {
  onClick: PropTypes.func,
  comics: PropTypes.array,
}

CharacterList.defaultProps = {
  onClick: () => {},
  comics: []
}

export default CharacterList