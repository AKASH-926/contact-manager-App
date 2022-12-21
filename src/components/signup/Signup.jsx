import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Signup() {

    const navigate = useNavigate();

    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        if (Email === '' || password === '' || confirmPassword === '') {
            return alert("Email or Password is missing");
        }

        await Axios("http://localhost:8000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                Email,
                password,
                confirmPassword
            }
        }).then(res => {
            console.log(res);
            console.log({
                Email,
                password,
                confirmPassword
            });
            navigate("/login")
        }).catch(e => {
            console.log(e.message);
            navigate('/')
        })

    }


    return (
        <div>Signup

            <div>
                <div className="login-container">
                    <div className="login-fields">
                        <input type="text"
                            name="login-email"
                            id="login-email"
                            className="login-email"
                            value={Email}
                            placeholder='User ID'
                            onChange={(e) => {
                                setEmail(e.target.value)
                                e.preventDefault()
                            }} />

                        <input type="password"
                            name="login-password"
                            id="login-password"
                            className="login-password"
                            value={password}
                            placeholder='password'
                            onChange={(e) => {
                                setPassword(e.target.value)
                                e.preventDefault()
                            }} />

                        <input type="password"
                            name="login-confirmpassword"
                            id="login-confirmpassword"
                            className="login-confirmpassword"
                            value={confirmPassword}
                            placeholder='confirm password'
                            onChange={(e) => {
                                setConfirmpassword(e.target.value)
                                e.preventDefault()
                            }} />

                        {/* <div className="login-button">
                    <button className="login-submit"
                    onClick={handleLogin}>Sign In</button>
                </div> */}

                        <div className="signup-button">
                            {/* <Link to={"/signup"}><span>Sign Up</span></Link> */}
                            <button onClick={handleSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup