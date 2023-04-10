import '../App.css'
import {useState} from "react"
import axios from 'axios'
import Button from '@mui/material/Button'
import {TextField} from '@mui/material'
import { useForm, Resolver } from 'react-hook-form';



const UserForm = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [city,setCity] = useState('');
    const [state,setState] = useState('');
    const [zip,setZip] = useState('');
    const [errors, setErrors] = useState({});


    type UserFormValues = {
        firstName: string;
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            firstName, 
            lastName, 
            email, 
            address, 
            city,
            state, 
            zip
        }).then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
            });
    };


    return (

        <div className='user-form' id="container" >
        <div className="form-box">
        <div> 
            <h2 className='call-to-action'> Sign Up for Weather Updates</h2>
        </div>
        <form onSubmit={handleSubmit} className="c-form" name="c-form" action="#" method="post" >
        <div className="two-columns">
            <fieldset>
            <TextField id="filled-basic" className="TextField" label="First Name" variant="filled" 
            value={firstName} type="firstName" onChange={(e)=>setFirstName(e.target.value)} required fullWidth/>
            </fieldset>

            <fieldset>
            <TextField id="filled-basic" label="Last Name" variant="filled" 
            value={lastName} onChange={(e)=>setLastName(e.target.value)}required fullWidth />

            </fieldset>
        </div>

        <fieldset>
            <TextField id="filled-basic" label="Email Address" variant="filled" 
            value={email} onChange={(e)=>setEmail(e.target.value)} required fullWidth />
        </fieldset>

        <fieldset>
            <TextField id="filled-basic" label="Address" variant="filled" 
            value={address} onChange={(e)=>setAddress(e.target.value)}fullWidth />
        </fieldset>

        <div className='three-columns'>

        <fieldset>
            <TextField id="filled-basic" label="City" variant="filled" 
            value={city} onChange={(e)=>setCity(e.target.value)}fullWidth />
        </fieldset>

        <fieldset>
            <TextField id="filled-basic" label="State" variant="filled" 
            value={state} onChange={(e)=>setState(e.target.value)}fullWidth />
        </fieldset>
        
        <fieldset>
        <TextField id="filled-basic" label="Zip Code" variant="filled" 
        value={zip} onChange={(e)=>setZip(e.target.value)}required fullWidth />
        </fieldset>

        </div>

        <fieldset className='Button'>
        <Button type='submit' variant="contained" fullWidth>Submit</Button>
        </fieldset>


        </form>
    </div>
    </div>

    )
    
}


export default UserForm; 

/* 
interface UserFormResponse {
    firstName: string
    lastName: string
    email: string
    address: string
    city: string
    state: string
    zip: number
}
 */