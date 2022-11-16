import styled from 'styled-components';

export const SearchBarContainer = styled.div`
display: flex;
justify-content: center;
`

export const Form = styled.form`
margin-bottom: 20px;
`

export const Input = styled.input`
width: 250px;
height: 25px;
margin-right: 30px;
margin-left: auto;
border-radius: 4px;
`

export const Button = styled.button`
width: 100px;
height: 30px;
font-size: 16px;
background-color: white;
border-color: tomato;
border-radius: 4px;
&:hover
&:focus{
    background-color: tomato;
    color: white;
}
`