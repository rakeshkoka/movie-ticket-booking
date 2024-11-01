import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        confirmpwd: ''
    });

    const [errors, setErrors] = useState({});

    const [showMessage, setShowMessage] = useState(false);

    const { firstname, lastname, username, email, password, confirmpwd } = data;

    const handleChange = (e) => {

        const { name, value } = e.target;

        // Check for the 'name' field: Prevent numbers
        if (name === 'firstname' || name === 'lastname') {
            if (/[0-9]/.test(value)) {
                setErrors({ ...errors, [name]: 'Name cannot contain numbers' });
                return; // Exit if there's an error
            } else {
                setErrors({ ...errors, [name]: '' }); // Clear error if valid
            }
        }

        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        console.log(data);
        e.preventDefault();

        const newErrors = {};

        if (password !== confirmpwd) {
            newErrors.confirmPassword = "Password and Confirm Password must match"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        axios.post('http://localhost:5000/register', data)
            .then(res => {
                console.log(res);
                setShowMessage(true);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch(err => console.log(err.response.data));

        setData({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmpwd: ''
        })
        setErrors({});
    };

    return (
        <form className="w-25 m-auto my-5 p-3" style={{ boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)' }} onSubmit={handleSubmit} >
            <div className='mb-3 ' >
                <h1 className='fs-2 text-center text-text-highlight' >Register Here..</h1>
            </div>
            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >First Name</label>
                <input className="form-control" name="firstname" type="text" value={firstname} onChange={handleChange} required />
            </div>

            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >Last Name</label>
                <input className="form-control" name="lastname" type="text" value={lastname} onChange={handleChange} required />
            </div>

            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >UserName</label>
                <input className="form-control" name="username" type="text" value={username} onChange={handleChange} required />
            </div>

            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >Email</label>
                <input className="form-control" name="email" type="email" value={email}
                    pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$" onChange={handleChange} required />
            </div>


            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >Password</label>
                <input className="form-control" name="password" type="password" value={password} onChange={handleChange} required />
            </div>

            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label" >Confirm Password</label>
                <input className="form-control" name="confirmpwd" type="password" value={confirmpwd} onChange={handleChange} required />

                {confirmpwd && password !== confirmpwd ? <div className="form-text text-danger ">Password and ConfirmPassword Should be same</div> : null}
            </div>

            <div className='flex justify-center items-center w-100 my-2' >
                <button type="submit" className="btn w-100" style={{ color: '#FFFFFF', backgroundColor: '#FF4A57' }}>Register</button>
            </div>

            {/* message */}
            {showMessage && (
                <div className="alert alert-success mt-3">
                    Registration successful! Redirecting to login...
                </div>
            )}

        </form>
    );
};

export default Register;
