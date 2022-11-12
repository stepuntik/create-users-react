import styles from './Card.module.css';

const { card } = styles;

const Card = ({ className, children }) => (
  <div className={`${card} ${className}`}>{children}</div>
);

export default Card;
