import React, { useContext, useState } from 'react';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { CategoriesContext } from '../context/categoriesContext';
import { RecipesContext } from '../context/recipesContext';


const Form = () => {

  const [ searchData, setSearchData ] = useState({
    ingredient: '',
    category: ''
  });

  const { categories } = useContext(CategoriesContext);
  const { setSearch, saveQuery } = useContext(RecipesContext);

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Container maxWidth="sm" style={{ margin : '4rem auto' }}>
          <Typography variant="h4" gutterBottom style={{ color : '#f8a055' }}>
              Find your drink recipe here!
          </Typography>
          <form onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchData);
            saveQuery(true);
          }}>
            <Grid container spacing={0.5}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl fullWidth style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <InputLabel id="category">Category (required)</InputLabel>
                    <Select
                      labelId="category"
                      id="category"
                      label="Category (required)"
                      name='category'
                      value={searchData.category}
                      onChange={handleChange}
                      required
                              
                    >
                      {categories.map(category => (
                        <MenuItem key={category.strCategory} value={category.strCategory}>{category.strCategory}</MenuItem>
                      ))}

                    </Select>
                </FormControl>
              </Grid>
            
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl fullWidth style={{ marginTop: '1rem' }}>
                  <TextField
                    id="outlined-basic"
                    label="Ingredient (optional)"
                    name= "ingredient"
                    value={searchData.ingredient}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Button 
                  fullWidth
                  variant="contained" 
                  style={{ marginTop: '1rem', backgroundColor: '#FA6E59' }}
                  type="submit"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>

      </Container>


    </div>
  )
}

export default Form