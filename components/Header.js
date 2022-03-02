import classes from "../styles/Layout.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
        <h1>iA Recipe</h1>
  
      <p>
        iA Recipe is bangali food recipe website, <br /> You can get all the
        bangali recipe from this website.
      </p>
      <input type="text" placeholder="Search your favourite recipe..." />
    </div>
  );
};

export default Header;
