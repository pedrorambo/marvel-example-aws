import React, { useCallback, useEffect, useMemo, useState } from 'react'

import moment from 'moment'
import first from 'lodash/first'
import { useParams } from 'react-router-dom'
import parser from 'html-react-parser'

import applyDefaultLayout from '../../layouts/DefaultLayout'
import { findComicCharactersService, findComicService } from '../../services/comics'
import CharacterList from '../../containers/CharacterList'

import { CharactersTitle, ComicInformations, Container, Details, DetailsRow, Thumbnail, Title } from './styles'

const ComicDetailsPage = () => {
  const { id } = useParams()

  const [comic, setComics] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [isFirstRun, setIsFirstRun] = useState(true)

  const handleSearchComic = useCallback(async comicId => {
    const response = await findComicService(comicId)
    const responseCharacters = await findComicCharactersService(comicId)
    const item = first(response?.data?.results || [])

    setComics(item)
    setCharacters(responseCharacters?.data?.results)
  }, [])

  useEffect(
    () => {
      if (isFirstRun) {
        setIsFirstRun(false)
        handleSearchComic(id)
      }
    }, 
    [id, handleSearchComic, isFirstRun]
  )

  const thumbnail = useMemo(() => {
    return `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
  }, [comic])

  const published = useMemo(() => {
    const date = comic?.dates?.find(item => item.type === 'onsaleDate')
    
    if (date) {
      return moment(date?.date).format('D MMMM, YYYY')
    }
    return null
  }, [comic])

  const writters = useMemo(() => {
    const creators = comic?.creators?.items?.filter(item => item.role === 'writer')
      .map(item => item.name)

    if (creators && creators.length) {
      return creators.join(', ')
    }
    return null
  }, [comic])
  
  console.log('Oie', id, comic, characters)

  return (
    <Container>
      <ComicInformations>
        <Thumbnail src={ thumbnail } alt={ comic?.title } />
        <Details>
          <Title>{ comic?.title }</Title>
          <DetailsRow>
            <h3>Published:</h3>
            { published }
          </DetailsRow>
          <DetailsRow>
            <h3>Writers:</h3>
            { writters }
          </DetailsRow>
          { comic?.description && (
            <DetailsRow fullWidth>
              <h3>Description:</h3>
              { parser(comic?.description) }
            </DetailsRow>
          ) }
        </Details>
      </ComicInformations>
      <CharactersTitle>Characters</CharactersTitle>
      { characters && (
        <CharacterList comics={ characters } />
      ) }
    </Container>
  )
}

export default applyDefaultLayout(ComicDetailsPage)