import React from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import logo from  '../img/logo.png'; 


const HeaderContainer = styled.header`
  padding: 2rem;
  text-align: center;
  background-color: #FA6E59;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;

  }

  a {
    color: #2f1505;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.5rem;
    &:hover {
      color: #FFDB5C;
    }

    @media (min-width: 768px) {
      padding: 0;
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
          <a href="/categories">Categories</a>
          <a href="/favorites">Favorites</a>

        </NavContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header