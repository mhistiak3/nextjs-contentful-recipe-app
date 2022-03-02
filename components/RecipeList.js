import classes from "../styles/Layout.module.css";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className={classes.recipeContainer}>
      <div className={classes.container}>
        <div className={classes.recipeList}>
          {recipes.map((recipe) => (
           <RecipeCard key={recipe.sys.id} recipe={recipe}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
