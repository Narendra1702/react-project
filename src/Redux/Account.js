import {useSelector} from 'react-redux';

import React from 'react'

function Account() {

    const data = useSelector((state)=>{
        return state
    })
  return (
    <div>Account
    
    <div>
    <li>{data.balance}</li>
    <li>{data.withdraw}</li>
    <li>{data.name}</li>
    <li>{data.mobile}</li>
    </div>
    </div>
  )
}

export default Account;