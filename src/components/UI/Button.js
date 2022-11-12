import styles from './Button.module.css';

const { button } = styles;

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type || 'button'} className={button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
