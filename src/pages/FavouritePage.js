import { useContext } from "react";
import RecipeContext from "../context/recipeContext";
import Header from "../components/Header";
import RecipeItemList from "../components/RecipeItemList";

const FavouritePage = () =>{

    const { favourite } = useContext(RecipeContext);

    return (
        <div className="grid grid-cols-5 gap-16 py-5">
            <RecipeItemList recipe={favourite}/>
        </div>
    )
};

export default FavouritePage;