import styled from "styled-components"

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;
  padding: 4px 4px;
  width: 280px;
  border-bottom-right-radius:4px;
  border-top-right-radius:4px;
   &::placeholder {
  font-size: 16px;
  }
`
export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 4px;
`

export const Button = styled.button`
display: inline-block;
background-color: #fff;
border: none;
border-bottom-left-radius:4px;
border-top-left-radius:4px;
transition: background-color 
250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;
&:hover{
background-color:#d7d3d3;
}
`