import React, { useState } from 'react'

const Array = () => {
  const [emps, setEmps] = useState([])
  const [uname, setUname] = useState('')
  const [esal, setEsal] = useState(0)

  const HandleClick=()=>{
    setEmps([
      ...emps,{
        id:emps.length+1,
        name:uname,
        sal:esal
      }
    ])
  }

  return (
    <div>
      Name:<input type="text" onChange={(e)=>setUname(e.target.value)} />
      Sal:<input type="number" onChange={(e)=>setEsal(e.target.value)} />
      <button onClick={HandleClick}>Add Emp</button>

      <ul>
        {
          emps.map((emp)=>(
            <li key={emp.id}> ID:{emp.id} NAme: {emp.name} Sal:{emp.sal}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Array
