import React from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import logo from  '../img/logo.png'; 


const HeaderContainer = styled.header`
  padding: 1rem;
  text-align: center;
  background-color: #CFBA9E;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.2rem;
  }
  `;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  a {
    color: #7A633A;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      color: #DC9D21;
    }
  }
`;

const Header = () => {


  return (
    <HeaderContainer>
      <Container maxWidth="lg">
        <img src={logo} alt="logo" />
        <NavContainer>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/favorites">Favorites</a>
        </NavContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header