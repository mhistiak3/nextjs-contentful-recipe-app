import classes from "../styles/Layout.module.css";
const Header = ({ searchRecipe }) => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src="logo.png" alt="" />
        <h1>iA Recipe</h1>
      </div>

      <p>
        iA Recipe is bangali food recipe website, <br /> You can get all the
        bangali recipe from this website.
      </p>
      <input
        type="text"
        placeholder="Search your favourite recipe..."
        onChange={(e) => searchRecipe(e.target.value)}
      />
    </div>
  );
};

export default Header;
