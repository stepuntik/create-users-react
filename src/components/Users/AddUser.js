import { useState } from 'react';

import styles from './AddUser.module.css';

import ErrorModal from '../UI/ErrorModal';

import Card from '../UI/Card';
import Button from '../UI/Button';

const { input } = styles;

const ERROR_MESSAGES = {
  INVALID_INPUT: {
    title: 'Invalid input',
    message: 'Please enter a valid name and age (non-empty values).',
  },
  INVALID_AGE: {
    title: 'Invalid age',
    message: 'Please enter a valid age (>0).',
  },
};

const AddUser = ({ onAddUser }) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameInput = ({ target: { value } }) => {
    setUserName(value);
  };

  const handleUserAgeInput = ({ target: { value } }) => {
    setUserAge(value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };

    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError(ERROR_MESSAGES.INVALID_INPUT);
      return;
    }

    if (+userAge < 1) {
      setError(ERROR_MESSAGES.INVALID_AGE);
      return;
    }

    onAddUser(userData);

    setUserName('');
    setUserAge('');
  };

  return (
    <>
      {error && (
        <ErrorModal
          errorTitle={error.title}
          errorMessage={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={userName}
            type="text"
            id="username"
            onChange={handleUsernameInput}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={userAge}
            type="number"
            id="age"
            onChange={handleUserAgeInput}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
