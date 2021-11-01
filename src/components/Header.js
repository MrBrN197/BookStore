import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.heading}>
      <h1>BookStore</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">
              books
            </Link>
          </li>
          <li>
            <Link to="/categories">
              categories
            </Link>
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
