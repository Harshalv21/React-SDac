import React from 'react'

const Con3 = ({status}) => {

  switch (status) {
    case 'user':
      return <h2>Hello User</h2>
      break;
    case 'admin':
      return <h2>Hello Admin</h2>
      break;
    default:
      return <h3>Guest User</h3>
      break;
  }
}

export default Con3
