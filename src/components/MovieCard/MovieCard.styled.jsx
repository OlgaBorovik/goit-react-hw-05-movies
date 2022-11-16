import styled from 'styled-components';


import { NavLink } from 'react-router-dom';

export const MovieCardContainer = styled.div`

`
export const Card = styled.div`
display: flex;
`

export const Title = styled.h1`
text-align: center;
font-size: 42px;
`
export const Image = styled.img`
margin-right: 16px;
`

export const Link = styled(NavLink)`
font-size: 20px;
margin-left: 20px;
&:hover{
    color: tomato;
}
`