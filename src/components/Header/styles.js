import styled from 'styled-components'

export const CustomHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  color: white;
  padding: 10px 0;
`

export const CustomLogo = styled.img`
  cursor: pointer;
  transition: height .3s;
  height: 50px;

  &:hover {
    height: 52px;
  }
`