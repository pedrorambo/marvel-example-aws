import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;

  &:hover {
    img {
      padding-top: 0;
      padding-bottom: 10px;
    }
  }
`

export const Thumbnail = styled.img`
  width: 100%;
  height: 425px;
  position: relative;
  transition: padding .2s;
  padding-top: 10px;
  padding-bottom: 0;
`

export const Title = styled.h3`
  margin-bottom: 0;
`