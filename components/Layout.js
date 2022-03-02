import classes from '../styles/Layout.module.css'
const Layout = ({children}) => {
  return <div className={classes.layout}>{children}</div>;
}

export default Layout