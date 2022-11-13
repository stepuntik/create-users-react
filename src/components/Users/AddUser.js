import { useState, useRef } from 'react';

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
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(null);

  const errorHandler = () => {
    setError(null);
  };

  const handleSubmitAddUser = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError(ERROR_MESSAGES.INVALID_INPUT);
      return;
    }

    if (+enteredAge < 1) {
      setError(ERROR_MESSAGES.INVALID_AGE);
      return;
    }

    onAddUser(userData);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
        <form onSubmit={handleSubmitAddUser}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
