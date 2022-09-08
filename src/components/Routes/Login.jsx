
import React, {useEffect, useState} from 'react'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogout'

const Login = () => {

  const [isLog, setIsLog] = useState()
  useEffect(() =>{
    setIsLog(localStorage.getItem('token'))
  }, [])

  return (
    <main className="login">
      {
        isLog ?
        <FormLogout 
        setIsLog={setIsLog}
        isLog = {isLog}
        />
        :
        <FormLogin setIsLog={setIsLog}/>
      }
      
    </main>
  )
}

export default Login 