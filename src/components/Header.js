import { ImUser } from 'react-icons/im';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.heading}>
      <h1>BookStore</h1>
      <nav className={styles.navbar}>
        <ul>
          <li>
            books
          </li>
          <li>
            categories
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
