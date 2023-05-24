import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const userz = useSelector(state => state.users);
  const userCount = useSelector(state => state.users).length;
  
  let showUsers = userz.map(user => {
    return(
    <li key={user.id}>
      {user.username}
    </li>
    )
  })

  return (
    <div>
      <h3>Users!</h3>
      <p>Count: {userCount}</p>
      <ul>
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {showUsers}
        
        {/* In addition, display the total number of users curently in the store */}
        Total Users: {userCount}
      </ul>
    </div>
  );
}

export default Users;
