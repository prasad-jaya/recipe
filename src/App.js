import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { RecipeContextProvider } from "./context/recipeContext";


const App = () =>{
    return (
        <RecipeContextProvider >
            <RouterProvider router={router}/>
        </RecipeContextProvider>

    )
}

export default App;