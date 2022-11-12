import Card from '../UI/Card';

import styles from './UsersList.module.css';

const { users } = styles;

const UserList = ({ usersList }) => (
  <Card className={users}>
    <ul>
      {usersList.map(({ id, name, age }) => (
        <li key={id}>
          {name} ({age} years old)
        </li>
      ))}
    </ul>
  </Card>
);

export default UserList;
