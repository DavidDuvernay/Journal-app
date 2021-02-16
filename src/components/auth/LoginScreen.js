import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { loading, msgError} = useSelector( state => state.ui)

    const [ formValues, handleInputChange ] = useForm({
        email: 'david@gmail.com',
        password: '123123',
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault()

        if(loginIsValid()){
            dispatch(startLoginEmailPassword(email, password));
        }
    };

const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
};

const loginIsValid = () => {
    
    if(!validator.isEmail(email)){
        dispatch(setError('Email not valid'))
        return false
    } if( password.length < 5 ){
        dispatch(setError('Incorrect password'))
        return false
    }
     
    removeError()
    return true
};

    return (
        <div>
            <h3 className= 'auth__tittle'>Login</h3>
            <form onSubmit= { handleLogin }>

                {
                    msgError && 
                    (<div className= 'auth__alert-error'>
                        { msgError }
                    </div>)
                }
                
                <input
                    type= 'text'
                    placeholder= 'Email'
                    name= 'email'
                    className= 'auth__input'
                    value= { email }
                    onChange= {handleInputChange}
                />

                <input
                    type= 'password'
                    placeholder= 'Password'
                    name= 'password'
                    className= 'auth__input'
                    value= { password }
                    onChange= {handleInputChange}
                />

                <button
                    type= 'submit'
                    className= 'btn btn-primary btn-block'
                    disabled= { loading }
                >
                    Login
                </button>
                
                <div className= 'auth__social-network'>
                    <p>Login with Google</p>

                    <div 
                        className="google-btn"
                        onClick= { handleGoogleLogin }
                        >

                        <div className="google-icon-wrapper">
                            <img 
                                className="google-icon" 
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                                alt="google button" 
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>    
                </div> 

                <Link 
                    to='/auth/register'
                    className='link'    
                >
                    Create new account
                </Link>
            </form>

        </div>

    )
};