import React, {useContext, useState} from 'react'

import { ModalContext } from '../context/modalContext';
import { FavoritesContext } from '../context/favoritesContext';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Recipe = ({recipe}) => {

    const { setRecipeId, recipeInfo, setRecipeInfo } = useContext(ModalContext);
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const showIngredients  = (recipeInfo)  => {
        let ingredients = [];
        for (let i = 1; i <= 16; i++) {
            if (recipeInfo[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>
                        {recipeInfo[`strIngredient${i}`]} - {recipeInfo[`strMeasure${i}`]}
                    </li>
                );
            }
        }
        return ingredients;
    }

    const addToFavorites = (recipe) => {
        const newFavorites = [...favorites, recipe];
        setFavorites(newFavorites);
    }

    const removeFromFavorites = (recipe) => {
        const newFavorites = favorites.filter(fav => fav.idDrink !== recipe.idDrink);
        setFavorites(newFavorites);
    }

    const isFavorite = (recipe) => {
        return favorites.some(fav => fav.idDrink === recipe.idDrink);
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image={recipe.strDrinkThumb}
                alt={recipe.strDrink}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {recipe.strDrink}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {recipe.strInstructions}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                    size="small"
                    style={{color: '#DC9D21'}}
                    onClick={
                        () => {
                            setRecipeId(recipe.idDrink);
                            handleClickOpen();
                        }
                    }
                    >
                        More info
                    </Button>
                    <Button 
                    size="small"
                    style={{color: '#DC9D21'}}
                    onClick={
                        () => {
                            if(isFavorite(recipe)){
                                removeFromFavorites(recipe);
                            }else{
                                addToFavorites(recipe);
                            }
                        }
                    }
                    >
                        {isFavorite(recipe) ? 'Remove from favorites' : 'Add to favorites'}
                    </Button>

                    <Dialog
                        open={open}
                        onClose={
                            () => {
                                setRecipeId(null);
                                setRecipeInfo({});
                                handleClose();

                            }
                        }
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {recipe.strDrink}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <img src={recipeInfo.strDrinkThumb} alt={recipeInfo.strDrink} style={{ width: '100%' }} />
                            <h3>Ingredients</h3>
                            <ul>
                                { showIngredients(recipeInfo) }
                            </ul>
                            <h3>Instructions</h3>
                            {recipeInfo.strInstructions}
        
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <div className= "modal-buttons" style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                                <Button
                                    style={{color: '#FA6E59', border: '2px solid #FA6E59'}}
                                    onClick={
                                        () => {
                                            if(isFavorite(recipe)){
                                                removeFromFavorites(recipe);
                                            }else{
                                                addToFavorites(recipe);
                                            }
                                        }
                                    }
                                >
                                    {isFavorite(recipe) ? 'Remove from favorites' : 'Add to favorites'}
                                </Button>
                                <Button
                                    style={{color: '#FA6E59', border: '2px solid #FA6E59', marginLeft: '20px'}} 
                                    onClick={
                                        () => {
                                            setRecipeId(null);
                                            setRecipeInfo({});
                                            handleClose();
                                        }
                                    }
                                >
                                    Close
                                </Button>
                                
                            </div>
                        </DialogActions>
                    </Dialog>
        
                </CardActions>
            </Card>
    )
}

export default Recipe