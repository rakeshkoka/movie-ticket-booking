import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const {login} = useAuth();

    const [data, setData] = useState({ fullname: '', password: '' });

    const [error, setError] = useState('');

    const { fullname, password } = data;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setError('');

        setData({
            ...data,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/login', data)
            .then(res => {
                console.log(res);
                if (res.data.success) {

                    const token = res.data.token;
                    localStorage.setItem('token', token);

                    setError('');
                    login();
                    navigate('/');
                } else {
                    setError(res.data.message || 'Invalid fullname or Password');
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response) {
                    console.log(err.response.data);
                    setError(err.response.data.message || 'An error occurred. Please try again later.');
                } else {
                    console.log(err);
                    setError('An error occurred. Please try again later.');
                }
            });

        setData({ fullname: '', password: '' });
    };

    return (
        <form className="w-25 m-auto my-5 p-3" style={{boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)'}} onSubmit={handleSubmit} >
            <div className='mb-3' >
                <h1 className='fs-2 text-center text-text-highlight text-color' >Login Here..</h1>
            </div>

            <div className="mb-3 text-light" >
                <label htmlFor="" className="form-label">User Name</label>
                <input type="text" className="form-control" name="fullname" value={fullname} onChange={handleChange} />
            </div>

            <div className="mb-3 text-light">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
            </div>

            <div className='flex justify-center items-center w-100 my-2' >
                <button type="submit" className="btn w-100" style={{ color: '#FFFFFF', backgroundColor: '#FF4A57' }}>Login</button>
            </div>

            {error && <p className="text-danger" >{error}</p>}
        </form>
    )
}

export default Login