import { useContext } from "react";
import RecipeContext from "../context/recipeContext";
import Header from "../components/Header";
import RecipeItemList from "../components/RecipeItemList";
import { useSelector } from "react-redux";

const FavouritePage = () =>{
    const { favourite } = useContext(RecipeContext);
    const favouriteItem = useSelector((state) =>{
        return state.favourite
    });

    return (
        <div className="grid grid-cols-5 gap-16 py-5">
            <RecipeItemList recipe={favouriteItem.data}/>
        </div>
    )
};

export default FavouritePage;