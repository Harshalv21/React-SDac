import React, { useState } from 'react'

const Form = () => {
    const [user,setUser]= useState({uname:'',pass:''})
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert( `Hello...${user.uname}`)
    }
  return (
    <div
        class="container"
    >
        <div
            class="row justify-content-center align-items-center g-2"
        >
            <div class="col"><div class="card">
                <div class="card-body">
                    <form onSubmit={handleSubmit}>

                        <div class="form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setUser({...user,uname:e.target.value})}
                            />
                            <label for="formId1">UserName</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                name="formId1"
                                id="formId1"
                                placeholder=""
                                onChange={(e)=>setUser({...user,pass:e.target.value})}
                            />
                            <label for="formId1">Password</label>
                        </div>
                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Submit
                        </button>
                        
                    </form>
                    
                </div>
            </div>
            </div>
           
        </div>
        
    </div>
    
  )
}

export default Form
