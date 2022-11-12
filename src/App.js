import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (user) =>
    setUsersList((prevUsersList) => [...prevUsersList, user]);

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList usersList={usersList} />}
    </>
  );
}

export default App;
