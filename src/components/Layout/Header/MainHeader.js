
import classes from './MainHeader.module.css';

const MainHeader = (props) => {


  return (
    <header className={classes.header}>
      <h1>TOTO Context</h1>
      <nav>
        <ul>
          <li>
              {`<<-- Login -->>`}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
