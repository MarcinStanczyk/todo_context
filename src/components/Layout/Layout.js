import MainHeader from './Header/MainHeader';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <MainHeader />
      <main className={classes.gridLayout}>{props.children}</main>
    </>
  );
};

export default Layout;
