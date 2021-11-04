import { ImUser } from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.heading}>
      <h1>BookStore</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={styles.active} exact>
              books
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" activeClassName={styles.active}>
              categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.user}>
      <ImUser />
    </div>
  </header>
);

export default Header;
