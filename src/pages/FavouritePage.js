import { useContext } from "react";
import RecipeContext from "../context/recipeContext";
import Header from "../components/Header";
import RecipeItemList from "../components/RecipeItemList";

const FavouritePage = () =>{

    const { favourite } = useContext(RecipeContext);

    return (
        <div className="container mx-auto px-20 pt-12">
            <Header/>
            <div className="grid grid-cols-5 gap-16 py-6">
                <RecipeItemList recipe={favourite}/>
            </div>
        </div>
    )
};

export default FavouritePage;