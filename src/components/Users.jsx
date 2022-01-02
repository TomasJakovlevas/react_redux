import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import displayUsers from '../redux/actions/usersActions';

const Users = () => {
  // Hooks
  // -- state
  const usersData = useSelector((state) => state.users);

  //   const [showUsers, setshowUsers] = useState([]);
  const [amount, setAmount] = useState(0);

  const { users, loading, error } = usersData;
  const dispatch = useDispatch();

  // -- side effects
  useEffect(() => {
    dispatch(displayUsers());
  }, [dispatch]);

  // Custom functions

  const showUsers = (num) =>
    setAmount((prevState) => {
      if (prevState === num) return 0;
      return num;
    });

  //   const showFive = () => {
  //     setshowUsers(users.slice(0, 5));
  //   };

  //   const showTen = () => {
  //     setshowUsers(users);
  //   };

  return (
    <div>
      <div>
        <button onClick={() => showUsers(5)}>Show 5</button>
        <button onClick={() => showUsers(10)}>Show 10</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          users.slice(0, amount).map((user) => (
            <ul key={user.id}>
              <li>{user.name}</li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
