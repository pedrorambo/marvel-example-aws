import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Filters = styled.div`
  gap: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 25px;

  @media (max-width: 768px) { 
    grid-template-columns: 1fr;
  }
`

