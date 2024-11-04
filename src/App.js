import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { RecipeContextProvider } from "./context/recipeContext";
import { AuthProvider } from "./auth/AuthProvider";


const App = () =>{
    return (
        <AuthProvider>
            <RecipeContextProvider >
                <RouterProvider router={router}/>
            </RecipeContextProvider>
        </AuthProvider>
    )
}

export default App;