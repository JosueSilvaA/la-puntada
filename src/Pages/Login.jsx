import React from 'react';
import LoginForm from '../Components/LoginForm';
const Login = () => {

  const estilosLogin = {
    width:'100%',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'0px',
    background:'#7fdbda'
  }

  return (
    <>
      <div  style={estilosLogin}>
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
