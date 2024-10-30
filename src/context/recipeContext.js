import axios from "axios";
import { createContext, useState } from "react";

const RecipeContext = createContext();
const FEATURED_CATEGORY = [
    'Pork',
    'Beef',
    'Lamb',
    'Chicken'
];

const RecipeContextProvider = ({children}) =>{
    const [ recipe, setRecipe ] = useState([]);
    const [ favourite, setFavourite ] = useState([]);

    const fetchRecipe  = async (data) => {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data}`);
            setRecipe(res.data.meals);
    }

    const fetchRecipeByCategory = async (recipeCategory) =>{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeCategory}`);
        setRecipe(res.data.meals);
    }

    const addToFavourite = (favItem) =>{
      
        const availble = favourite.some((fav) => fav.idMeal === favItem.idMeal );
        availble || setFavourite([...favourite, favItem]);
        
    }

    return <RecipeContext.Provider value={{recipe, favourite, fetchRecipe, fetchRecipeByCategory, addToFavourite }}>
        {children}
    </RecipeContext.Provider>
};


export { RecipeContextProvider };
export default RecipeContext;