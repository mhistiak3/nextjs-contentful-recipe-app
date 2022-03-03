import Header from "../components/Header";
import RecipeList from "../components/RecipeList";
import { createClient } from "contentful";
import { useState } from "react";

export default function Home({ recipes }) {
  const [myRecipes,setRecipes]=useState(recipes)

   const searchRecipe = (searchTerm) => {
     if (searchTerm === "") {
       setRecipes(recipes);
     } else {
       const filterList = recipes.filter((recipe) =>
         recipe.fields.title.toLowerCase().includes(searchTerm.toLowerCase())
       );
       setRecipes(filterList);
     }
   };

  return (
    <>
      <Header searchRecipe={searchRecipe} />
      <RecipeList recipes={myRecipes} />
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