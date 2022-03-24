import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {

    // State del provider

    const [ recipeId, setRecipeId ] = useState(null);

    const [ recipeInfo, setRecipeInfo ] = useState({});

    useEffect(() => {
        const getRecipeById = async () => {
            if (recipeId) {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`;
                const result = await axios.get(url);
                setRecipeInfo(result.data.drinks[0]);
            }
        }
        getRecipeById();
    }, [recipeId]);


    return(
        <ModalContext.Provider value={{
            setRecipeId,
            recipeInfo,
            setRecipeInfo
        }}>
            {props.children}
        </ModalContext.Provider>
    )
    
}

export default ModalProvider;