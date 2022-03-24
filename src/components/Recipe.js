import React, {useContext, useState} from 'react'

import { ModalContext } from '../context/modalContext';
import { FavoritesContext } from '../context/favoritesContext';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Recipe = ({recipe}) => {

    const { setRecipeId, recipeInfo, setRecipeInfo } = useContext(ModalContext);
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            handleOpen();
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
                    <Modal
                        open={open}
                        onClose={
                            () => {
                                setRecipeId(null);
                                setRecipeInfo({});
                                handleClose();

                            }
                        }
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            {recipeInfo.strDrink}
                            <img src={recipeInfo.strDrinkThumb} alt={recipeInfo.strDrink} style={{width: '100%'}}/>
                            <h3>Ingredients</h3>
                            <ul>
                                { showIngredients(recipeInfo) }
                            </ul>
                            <h3>Instructions</h3>
                            {recipeInfo.strInstructions}
                        </Box>
                    </Modal>
                </CardActions>
            </Card>
    )
}

export default Recipe