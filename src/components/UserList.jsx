import React from 'react'
import { useState } from 'react'
import ReusableButton from './ReusableButton'

// We can use props to pass through the users list
// Can also be written as ( { users } ) 
const UserList = (props) => {
  const [users, setUsers] = useState(props.users)
  const [selectedUser, setSelectedUser] = useState(null)

  // Let's write a function to delete users from the list
  const deleteUser = (index) => {
    // The filter method removes the user from the list
      // The index to find the user we want to remove (this is why key is important)
      // The setUsers function to update the list
    const newUsers = users.filter((user, i) => i !== index)
    setUsers(newUsers)
  }

  const selectUser = (index) => {
    setSelectedUser(users[index])
  }

  return (
    <div>
      <h1>List of Users</h1>
      {/* { users.map((user, index) => <p>{user}</p> )} */}

      {/* <h3>Selected User</h3> */}
      {/* <p>{selectedUser}</p> */}

      {/* We only want to display the selected user if they exist */}
      {/* So we check if there is a selected user and then we display this */}

      { selectUser && 
        <div>
          <h3>Selected User</h3>
          <p>{selectedUser}</p>
        </div>
      }

      <h3>Users</h3>

      { users.map((user, index) => 
        <div key={index}>
          <p>{user}</p>

          {/* Let's add the reusable button component to the user */}
          <ReusableButton handleClick={() => deleteUser(index)} title="Delete User"/>

          <br />

          {/* Now we want to be able to select the user */}
          <ReusableButton handleClick={() => selectUser(index)} title="Select User"/>

            {/* Old - calling the function in the component normally */}
          {/* <button onClick={() => deleteUser(index)}>Click Me</button> */}

        </div>
      )}
    </div>
  )
}

// We can use props to set a default value for this list so the page isn't empty when it loads 
UserList.defaultProps = {
  users: ["Jake Default", "Sally Default", "Sarah Default"]
}

export default UserList