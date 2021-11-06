import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';
import styles from './Button.module.scss';

const Button = ({
  loading,
  disabled,
  children,
  submit,
}) => (
  <>
    <button type={submit ? 'submit' : 'button'} disabled={disabled}>
      {loading ? (
        <CgSpinner className={styles.spinner} fontSize="2em" />
      )
        : (
          <>
            { children }
          </>
        )}
    </button>
  </>
);

Button.defaultProps = {
  loading: true,
  disabled: true,
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
};

export default Button;
