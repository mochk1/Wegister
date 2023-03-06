import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode'


const Login = ()=> {

//client id from console.cloud.google
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const [user,setUser] = useState({})
  
  //handle callback after user login - update the state with decoded user object
    const handleCB = (res) => {
      var userObject = jwt_decode(res.credential)
      console.log(userObject)
      setUser(userObject)
    }
  
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: client_id,
        callback: handleCB
      })
  
      google.accounts.id.renderButton(
        document.getElementById('signInDiv'), { theme: "outline", size: "large" }
      )
  
    }, [])
  
    return (
<>
            <div className='bg-gray-200 flex justify-center'>
                <div className='mt-4'>
                    {user && <p className='font-semibold'>{user.name}<p>{user.email}</p></p>}
                    <div className="mt-2 mr-10" id="signInDiv"></div>
                </div>
                <img src="/logo.png" alt="" />
            </div>
</>

    )
}

export default  Login;