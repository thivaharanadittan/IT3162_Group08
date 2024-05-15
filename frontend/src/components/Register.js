import react ,{useState,useEffect}from 'react';
import './css/Register.css';
import axios from 'axios';
import Loder from '../components/Loder';
import Error from '../components/Error';
import Success from '../components/Success';

export default function Register(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [cpassword,setCPassword]=useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    async function register(){
        if(password == cpassword)
        {
            const user={
                name,
                email,
                password,
                cpassword
            }
            try {
                setLoading(true)
                const result= await axios.post('/api/users/register',user).data;
                setLoading(false)
                setSuccess(true)

                setName('')
                setEmail('')
                setPassword('')
                setCPassword('')
            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(true)
            }
        }
        else{
            alert('Password does not Match ')
        }
    }
    return(
        <div>
            {loading && (<Loder/>)}
            {error && (<Error/>)}
        <div className='row justify-content-center mt-5'>
            <div className='col-md-5'>
            {success && (<Success message='Registraion Success'/>)}
                <div className='bs'>
                    <h2>Register</h2>
                    <input type='text' className='form-control' placeholder='Name' 
                    value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Email'
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='Password'
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <input type='text' className='form-control' placeholder='ConfirmPassword'
                    value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}}/>

                    <button className='btn btn-primary mt-3' onClick={register}>
                        Register
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}