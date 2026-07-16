import React from 'react'

const Con1 = ({isLogged}) => {
    if (isLogged) {
      return <h2>User is Logged in</h2>
    } else {
      return <h2>Failed to get user</h2>
    }
  
}

export default Con1
