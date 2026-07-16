import React from 'react'

const Con2 = ({isLogged}) => {
  return (
    <div>
      {
        isLogged ? <h1>User hai</h1> : <h1>User nahi hai</h1>
      }

      {isLogged && <h2>Hello User</h2>}
    </div>
  )
}

export default Con2
