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
      <Container maxWidth="sm" style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom style={{ color : '#b57f1e' }}>
              Find a drink by category or ingredient
          </Typography>
          <form onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchData);
            saveQuery(true);
          }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <FormControl fullWidth style={{ marginTop: '1rem' }}>
                    <InputLabel id="category">Category</InputLabel>
                    <Select
                      labelId="category"
                      id="category"
                      label="Category"
                      name='category'
                      value={searchData.category}
                      onChange={handleChange}
                              
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
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
                    label="Ingredient"
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
                  style={{ marginTop: '1rem', backgroundColor: '#ff6f00' }}
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