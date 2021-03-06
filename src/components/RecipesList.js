import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import { RecipesContext } from '../context/recipesContext';
import Recipe from './Recipe';

import Masonry from 'react-masonry-css'


const RecipesList = () => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 4,
        700: 3,
        500: 1
    };

    const { recipes } = useContext(RecipesContext);

    return (
        <Container maxWidth="lg" style={{ margin : '1rem auto', textAlign : 'center' }}>
            <Masonry
                style = {{ margin: '0 auto' }}
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {recipes ? recipes.map(recipe => <Recipe key={recipe.idDrink} recipe={recipe} />) : null}
            </Masonry>
        </Container>
    )
}

export default RecipesList