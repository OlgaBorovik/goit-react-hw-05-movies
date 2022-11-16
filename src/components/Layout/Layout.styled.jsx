import styled from 'styled-components';


import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 20px;
  font-size: 27px;
  font-weight: 500;
  text-decoration: none;
  color: #212121;
  &.active,
  &:hover,
  &:focus {
    color: tomato;
  }
`;