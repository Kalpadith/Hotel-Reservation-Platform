
import axios from 'axios';

import {Link} from 'react-router-dom';
import { useState } from 'react';


const LoginH = () => {

    const [data, setData] = useState({
        
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    

    const handleInputChange = ({ currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    };


    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const url = "http://localhost:8051/logino/autho";
            const { data: res} = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/addUpdate"
            
            

        }catch(error){
            if(error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500){
                    setError(error.response.data.message)

                }

        }

    }

    return(
        <div>
            <div>
            
            </div>

            <div>
            <div className="col-md-8 mt-4 mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                   
                    <form onSubmit={handleSubmit}>
                    

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Email</label>
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={data.email}
                                required
                                onChange={handleInputChange} />
                        </div>

                        

                        <div className="form-group" style={{ marginBottom: '15px' }}>
                            <label style={{ marginBottom: '5px' }}>Password</label>
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={data.password}
                                required
                                onChange={handleInputChange} />
                        </div>
                        {error && <div>{error}</div>}
                        <button type='submit'>Sign in</button>
                        </form>

                        <h1>new here?</h1>
            <Link to={"/SignupH"}><button type='button'>Sign up</button></Link>

            </div>

        </div>
        </div>
    
    )
};
export default LoginH;