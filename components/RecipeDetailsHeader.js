import Link from "next/link";
import classes from "../styles/Layout.module.css";
const RecipeDetailsHeader = () => {
  return (
    <>
      <div className={classes.header}>
        <Link href={"/"}>
          <div className={classes.logo}>
            <img src="../logo.png" alt="" />
            <h1>iA Recipe</h1>
          </div>
        </Link>
        <p>
          iA Recipe is bangali food recipe website, <br /> You can get all the
          bangali recipe from this website.
        </p>
      </div>
    </>
  );
};

export default RecipeDetailsHeader;
