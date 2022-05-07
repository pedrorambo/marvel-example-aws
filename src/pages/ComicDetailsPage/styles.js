import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const ComicInformations = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: fit-content;
`

export const Title = styled.h1`
  margin-top: 0;
  grid-column-start: 1;
  grid-column-end: 3;
`

export const CharactersTitle = styled.h2`
  margin-top: 50px;
  grid-column-start: 1;
  grid-column-end: 3;
`

export const DetailsRow = styled.div`
  ${({ fullWidth }) => fullWidth ? `
    grid-column-start: 1;
    grid-column-end: 3;
  ` : ''}

  h3 {
    margin-bottom: 3px;
  }
`