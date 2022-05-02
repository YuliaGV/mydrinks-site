import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);

    const [searchName, setSearchName] = useState({
        name: ''
    });

    const [searchCategory, setSearchCategory] = useState({
        category: ''
    });


    const [query, saveQuery] = useState(false);

    const {name} = searchName;
    const {category} = searchCategory;


    useEffect(() => {

        if(query){
           
            const getRecipes = async () => {

                //Search by name or ingredient
                const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
                const recipes = await axios.get(url);
                setRecipes(recipes.data.drinks);
                        
            }
             getRecipes();
        }


    }, [searchName]);


    useEffect(() => {
        if(query){

            const getRecipes = async () => {

                //Search by category
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
                const recipes = await axios.get(url);
                setRecipes(recipes.data.drinks);

            }
            getRecipes();
        }
    }, [searchCategory]);
    
   
    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setSearchName,
                setSearchCategory,
                saveQuery
            }}
            
        >
            {props.children}
        </RecipesContext.Provider>
    );

}

export default RecipesProvider;