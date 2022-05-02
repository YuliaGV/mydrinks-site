import React, { useContext, useState } from 'react';
import { Button, Container, FormControl, Grid, TextField, Typography } from '@mui/material';
import { RecipesContext } from '../context/recipesContext';


const Form = () => {

  const [ searchData, setSearchData ] = useState({
    name: ''
  });

  const { setSearchName, saveQuery } = useContext(RecipesContext);

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
            setSearchName(searchData);
            saveQuery(true);
          }}>
            <Grid container spacing={0.2}>
            
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl fullWidth style={{ marginTop: '1rem' }}>
                  <TextField
                    id="outlined-basic"
                    label="What do you want to drink?"
                    placeholder='E.g. "Tequila" or "Coffee"'
                    style = {{ borderColor : '#f8a055'  }}  
                    name= "name"
                    value={searchData.name}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>

              
              <Grid item xs={12} sm={12} md={12} lg={12} >
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