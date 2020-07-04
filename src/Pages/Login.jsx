import React from 'react';
import LoginForm from '../Components/LoginForm';

const Login = () => {
    const logApi = (data) => {
        console.log(data)
    }

    return (
        <React.Fragment>
            <div className="mt-4">
                <LoginForm logApi={logApi}/>
            </div>
        </React.Fragment>
    )
}

export default Login;