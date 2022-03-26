import React, {useContext} from 'react'
import { FavoritesContext } from '../context/favoritesContext';

import { Container, Typography } from '@mui/material';

import Recipe from './Recipe';
import Masonry from 'react-masonry-css'

const Favorites = () => {

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 1
  };

  const { favorites } = useContext(FavoritesContext);


  return (
    <Container maxWidth="lg" style={{ margin: '2rem auto' }}>
        <Typography variant="h4" gutterBottom style={{ color : '#f8a055' }}>
          My Favorites
        </Typography>

        <Masonry
          style = {{ margin: '0 auto' }}
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {favorites.map(recipe => (
            <Recipe key={recipe.idDrink} recipe={recipe} />
          ))}
        </Masonry>
    </Container>
  )
}

export default Favorites