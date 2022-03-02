import Link from "next/link";
import classes from "../styles/Layout.module.css";
const RecipeDetailsHeader = () => {
  return (
    <>
      <div className={classes.header}>
        <h1>iA Recipe</h1>
        <p>
          iA Recipe is bangali food recipe website, <br /> You can get all the
          bangali recipe from this website.
        </p>

        <Link href={"/"}>
          <a className={classes.btn}>⬅️ Back To Home</a>
        </Link>
      </div>
    </>
  );
};

export default RecipeDetailsHeader;
