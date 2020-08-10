import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import LoginForm from '../Components/LoginForm';

const Login = ({ changeAuth }) => {
  const [ShowForm, setShowForm] = useState(false);
  const history = useHistory();

  const estilosLogin = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px',
    background: '#7fdbda',
  };

  const viewToken = () => {
    let token = window.localStorage.getItem('userToken');
    if (token === null) {
      token = window.sessionStorage.getItem('userToken');
    }

    if (token !== null) {
      history.replace('/main');
    } else {
      setShowForm(true);
    }
  };

  useEffect(() => {
    viewToken();
  }, []);

  return (
    <>
      {!ShowForm && (
        <div className="d-flex" style={estilosLogin}>
          <CircularProgress className="mx-auto" size={50} color="secondary" />
        </div>
      )}
      <div style={estilosLogin}>{ShowForm && <LoginForm changeAuth={changeAuth} />}</div>
    </>
  );
};

export default Login;
