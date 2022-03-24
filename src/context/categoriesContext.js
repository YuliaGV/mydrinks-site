import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

//Create context

export const CategoriesContext = createContext();

//Provider save the data

const CategoriesProvider = (props) => {

    //create state
    const [categories, setCategories] = useState([]);

    //get data from API
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }
        getCategories();
    }, [])

    
    return (
        <CategoriesContext.Provider value={{categories: categories}}>
            {props.children}
        </CategoriesContext.Provider>
    )

}

export default CategoriesProvider;
