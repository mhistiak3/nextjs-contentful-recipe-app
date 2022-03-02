import RecipeDetailsHeader from "../../components/recipeDetailsHeader";
import { createClient } from "contentful";
import classes from "../../styles/RecipeDetails.module.css";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

const CookDetails = ({ recipe }) => {
  const { title, cookingTime, featuredImage, ingredients, method } =
    recipe.fields;

  return (
    <div className="recipeDetails">
      <RecipeDetailsHeader />
      <div className={classes.banner}>
        <div className={classes.container}>
          <div className={classes.fetured}>
            <Image
              src={`https:${featuredImage.fields.file.url}`}
              width={featuredImage.fields.file.details.image.width}
              height={featuredImage.fields.file.details.image.height}
              placeholder="blur"
              blurDataURL
            />
            <h1>{title}</h1>
          </div>
          <div className={classes.info}>
            <h2>
              <b>Cooking Time:</b> {cookingTime}M
            </h2>
            <h3>Ingredients:</h3>
            <div className={classes.ingredients}>
              {ingredients.map((ing) => (
                <span key={ing}>{ing}</span>
              ))}
            </div>
          </div>
          <div className={classes.method}>
            <h1>Method:</h1>
            {documentToReactComponents(method)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookDetails;

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: "iARecipe",
  });
  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "iARecipe",
    "fields.slug": params.slug,
  });
  return {
    props: {
      recipe: items[0],
    },
  };
}
