import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({ username: '', password: '' });

    const [error, setError] = useState('');

    const { username, password } = data;

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
                    setError('');
                    navigate('/dashboard');
                } else {
                    setError(res.data.message || 'Invalid UserName or Password');
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

        setData({ username: '', password: '' });
    };

    return (
        <form className="w-25 m-auto my-5 shadow p-3" onSubmit={handleSubmit} >
            <div className='mb-3' >
                <h1 className='fs-2 text-center' >Login Here..</h1>
            </div>

            <div className="mb-3" >
                <label htmlFor="" className="form-label">User Name</label>
                <input type="text" className="form-control" name="username" value={username} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-success">Login</button>

            {error && <p className="text-danger" >{error}</p>}
        </form>
    )
}

export default Login