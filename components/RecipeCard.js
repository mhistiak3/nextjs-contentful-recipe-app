import Image from "next/image";
import Link from "next/link";
import classes from "../styles/RecipeCard.module.css";
const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className={classes.recipeCard}>
      <div className={classes.thumbnail}>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={"100%"}
          height={"300px"}
          alt='Thumbnail'
        />
      </div>
      <div className={classes.content}>
        <div className={classes.info}>
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </div>
        <div className={classes.actions}>
          <Link href={`/recipe/${slug}`}>
            <a>Cook This</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
