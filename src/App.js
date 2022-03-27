import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import CategoriesProvider from './context/categoriesContext';
import RecipesProvider from './context/recipesContext';
import ModalProvider from './context/modalContext';
import FavoritesProvider from './context/favoritesContext';


import Header from './components/Header';
import Footer from './components/Footer';


import Home from './components/Home';
import About from './components/About';
import Favorites from './components/Favorites';


import styled from 'styled-components';


const AppContainer = styled.div`
  background-color: #EAE2D6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
  color: black;
`;


function App() {


  return (
    <CategoriesProvider>
      <RecipesProvider>
        <FavoritesProvider>
          <ModalProvider>
            <AppContainer>
              <Header />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/favorites" element={<Favorites />} />
                </Routes>
              </BrowserRouter>
            </AppContainer>
            <Footer />
          </ModalProvider>
        </FavoritesProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
