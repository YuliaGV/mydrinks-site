import React, { useContext, useState } from 'react';

import { CategoriesContext } from '../context/categoriesContext'
import { RecipesContext } from '../context/recipesContext';

import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import RecipesList from './RecipesList';

const Categories = () => {

    const [ searchData, setSearchData ] = useState({
        category: ''
      });
    

    const { categories } = useContext(CategoriesContext);

    const { setSearchCategory, saveQuery } = useContext(RecipesContext);


    return (
        <Container  style={{ margin: '2rem auto' }}>
            <Typography variant="h4" gutterBottom style={{ color : '#f8a055' }}>
                Categories
            </Typography>

            <form 
                style={{ maxWidth: '500px', margin: '0 auto' }}
                onSubmit={(e) => {
                e.preventDefault();
            }}>
                <Grid container spacing={0.5} alignItems="center">
                    
                    <Grid item xs={12} sm={12} md={12} lg={12}>

                        <p>Select a category to see the recipes</p>
                        <FormControl fullWidth style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                            <InputLabel id="category">Category (required)</InputLabel>
                            <Select
                            labelId="category"
                            id="category"
                            label="Category (required)"
                            name='category'
                            value={searchData.category}
                            onChange={(e) => {
                                    setSearchData({
                                        ...searchData,
                                        [e.target.name]: e.target.value
                                    });
                                    setSearchCategory({
                                        ...searchData,
                                        [e.target.name]: e.target.value
                                    });
                                    saveQuery(true);
                                }
                            }
                          
                                    
                            >
                            {categories.map(category => (
                                <MenuItem key={category.strCategory} value={category.strCategory}>{category.strCategory}</MenuItem>
                            ))}

                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>

            <RecipesList />
      
        </Container>
    );
}

export default Categories