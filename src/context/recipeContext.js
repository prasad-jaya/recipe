import axios from "axios";
import { createContext, useState } from "react";

const RecipeContext = createContext();

export const FEATURED_CATEGORY = [
    'Pork',
    'Beef',
    'salmon',
    'chicken'
]

const RecipeContextProvider = ({children}) =>{
    const [ recipe, setRecipe ] = useState([]);

    const fetchRecipe  = async () => {
        const promises = FEATURED_CATEGORY.map(async (category) =>{
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            return res;
        });
        const data  = await Promise.all(promises);
        setRecipe(data);
    }

    const fetchRecipeByCategory = async (recipe) =>{
        console.log('loading');

        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipe}`);
        console.log('loaded');

        setRecipe(res.data.meals);
    }

    return <RecipeContext.Provider value={{recipe, fetchRecipe, fetchRecipeByCategory}}>
        {children}
    </RecipeContext.Provider>
};


export { RecipeContextProvider };
export default RecipeContext;