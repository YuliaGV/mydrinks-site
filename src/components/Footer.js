import React from 'react'
import Container from '@mui/material/Container';
import styled from 'styled-components';

import HomerBeer from '../img/homer-beer.png';

const FooterContainer = styled.header`
  width: 100%;
  text-align: center;
  background-color: #F8A055;
  color: #2f1505;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <Container maxWidth="sm">
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>
                <img src={HomerBeer} alt="logo" />
              </div>
              <div>
                <small>Here's to alcohol: the cause of, and solution to, all of life's problems</small>
              </div>
            </div>
            <small>
                Create by <a href="https://github.com/YuliaGV" target="_blank" rel="noopener noreferrer">Yuliana Gaviria</a>
            </small>
        </Container>
    </FooterContainer>
  
  )
}

export default Footer