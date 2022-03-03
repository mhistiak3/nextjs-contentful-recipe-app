import classes from "../styles/Layout.module.css";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className={classes.recipeContainer}>
      <div className={classes.container}>
        <div className={classes.recipeList}>
          {recipes.length > 0 ? (
            ""
          ) : (
            <h1 style={{ padding: "150px 0", }}>No Result Found</h1>
          )}
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.sys.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
