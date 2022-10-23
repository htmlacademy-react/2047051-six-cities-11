import {AppRoutes} from '../../constants';
import {Link} from 'react-router-dom';
import styles from './not-found-page.module.css';

function NotFoundPage (): JSX.Element {
  return (
    <div className={styles['page-wrapper']}>
      <section className={styles['error-section']}>
        <p className={styles['error-code']}>404</p>
        <p>Sorry, page not found :(</p>
        <Link className={styles['error-link']} to={AppRoutes.Main}>
          Click here to go back to main page
        </Link>
      </section>
    </div>

  );
}

export default NotFoundPage;
