import styled from 'styled-components';


export const List = styled.ul`
display: flex;
flex-wrap: wrap;
margin-left: -30px;
margin-bottom: -30px;
  margin-top: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
` 

export const Item = styled.li`
        display: block;
        width: 300;
        margin-left: 30px;
        margin-bottom: 40px;
        height: 500px;
        border-radius: 4px;
        border: 1px solid #AFB1B8;
        transition-property: border;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            border: 1px solid tomato;
        }
`

export const Title = styled.h1`
margin-left: auto;
margin-right: auto;
text-align: center;
`

export const Image = styled.img`
width: 100%;
height: 450px;
`

export const Text = styled.p`
text-align: center;
margin-top: 20px;
`
