import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

export const CustomLabel = styled.label`
  color: #f4f4f4;
  margin-bottom: 5px;
`

export const CustomInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  /* Size - (Padding + Border = 20 + 2) */
  width: calc(100% - 22px);
  background-color: transparent;
  border: 1px solid #a8a8a8;
  outline: none;
  color: #f4f4f4;
  font-size: 17px;
`