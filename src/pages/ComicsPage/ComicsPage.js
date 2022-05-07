import React, { useCallback, useEffect, useMemo, useState } from 'react'

import get from 'lodash/get'
import omitBy from 'lodash/omitBy'
import { useNavigate } from 'react-router-dom'

import InputText from '../../components/InputText'
import ComicList from '../../containers/ComicList'
import applyDefaultLayout from '../../layouts/DefaultLayout'
import { searchComicsService } from '../../services/comics'

import { Container, Filters } from './styles'

const ComicsPage = () => {
  const navigate = useNavigate()

  const [filters, setFilters] = useState({})
  const [comics, setComics] = useState(null)

  const searchComics = async (dtoFilters = {}, ignoreOffset = false) => {
    const offset = ignoreOffset ? 0 : comics?.data?.results?.length || 0;
    const response = await searchComicsService({ 
      limit: 40, 
      offset, 
      ...(omitBy(dtoFilters, item => !item)) 
    });

    if (comics && !ignoreOffset) {
      response.data.results = [
        ...get(comics, "data.results", []),
        ...get(response, "data.results", []),
      ];
    }

    setComics(null)
    setComics(response);
  }

  const handleChangeFilters = useCallback((name, value) => {
    setFilters({ ...filters, [name]: value  })
  }, [filters])

  const results = useMemo(() => {
    return comics?.data?.results ? comics?.data?.results : []
  }, [comics])

  /**
   * Method to search before one seconds awaiting
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => searchComics(filters, true), 1000)
    return () => clearTimeout(timeoutId)
  // eslint-disable-next-line
  }, [filters])

  const handleClickComic = comicId => {
    navigate(`/comic/${comicId}`)
  }

  return (
    <Container>
      <Filters>
        <InputText 
          label="Title" 
          placeholder="Title starts with..."
          name="titleStartsWith" 
          onChange={ handleChangeFilters }
        />
        <InputText 
          label="Year" 
          placeholder="Year..."
          name="startYear" 
          onChange={ handleChangeFilters }
        />
      </Filters>

      <ComicList comics={ results } onClick={ handleClickComic } />
    </Container>
  )
}

export default applyDefaultLayout(ComicsPage)