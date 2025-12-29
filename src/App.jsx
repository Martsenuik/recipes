import recipes from "../recipes.json";
import { RecipesFunction } from "./components/recipies/Recipes";

function App() {
  return (
    <>
      <RecipesFunction recipes={recipes} />
    </>
  );
}

export default App;
