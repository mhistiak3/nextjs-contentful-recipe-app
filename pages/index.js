import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import { createClient } from "contentful";

export default function Home({ recipes }) {
  return (
    <>
      <Header />
      <RecipeList recipes={recipes} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "iARecipe",
  });

  return {
    props: {
      recipes: response.items,
    },
  };
}