import react, { useState } from 'react';
import './css/Register.css';
import axios from 'axios';
import Loder from '../components/Loder';
import Error from '../components/Error';

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function login() {

        const user = {
            email,
            password,
        };
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', user);
            const result = response.data;
            setLoading(false);

            localStorage.setItem('currentuser', JSON.stringify(result));
            window.location.href = '/home';
        } catch (error) {
            console.log(error);
            setLoading(false)
            setError(true)
        }
    }
    return (
        <div>
            {loading && (<Loder />)}
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5'>
                    {error && (<Error message='Invalid credentials' />)}
                    <div className='bs'>
                        <h2>Login</h2>
                        <input type='text' className='form-control' placeholder='Email'
                            value={email} onChange={(e) => { setEmail(e.target.value); }} />
                        <input type='text' className='form-control' placeholder='Password'
                            value={password} onChange={(e) => { setPassword(e.target.value); }} />

                        <button className='btn btn-primary mt-3' onClick={login}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}