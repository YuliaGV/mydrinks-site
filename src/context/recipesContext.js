import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState({
            category: '',
            ingredient: ''
    });

    const [query, saveQuery] = useState(false);
    const { category, ingredient } = search;

    

    useEffect(() => {
        if(query){
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const recipes = await axios.get(url);
                setRecipes(recipes.data.drinks);
            }
            getRecipes();
        }
    }, [search, category, ingredient, query]);
        
        
    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setSearch,
                saveQuery
            }}
            
        >
            {props.children}
        </RecipesContext.Provider>
    );

}

export default RecipesProvider;