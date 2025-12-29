import RecipeInfoFunction from "../recipies/RecipeInfo";
import { List } from "../recipies/Recipes.styled.js";

export const RecipesFunction = ({ recipes }) => {
  return (
    <List>
      {recipes.map((rec) => {
        return (
          <RecipeInfoFunction
            key={rec.name}
            name={rec.name}
            time={rec.time}
            servings={rec.servings}
            calories={rec.calories}
            difficulty={rec.difficulty}
            image={rec.image}
          />
        );
      })}
    </List>
  );
};
