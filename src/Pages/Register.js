import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/userApi'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSave = async (e) => {
        console.log(name, email, password);
        e.preventDefault();
        try {
            const response = await api.post("/register", {
                username: name,
                email: email,
                password: password,
            });

            console.log(response.data);
            alert("Add User");
            localStorage.setItem("user", JSON.stringify(response.data));
            navigate("/");
        } catch (error) {
            console.error("Error during API call:", error);
        }
        // Reset the form inputs
        setName(" ");
        setEmail(" ");
        setPassword(" ");
    };


    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/login')
        }
    }, [])
    return (
       <>
        <h2 className="text-center App">Register User</h2>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 ">
                        {/* form   */}
                        <form className="mb-5 border border-primary p-4 m-3 rounded">
                            {/* name  */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    aria-describedby="nameUser"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            {/* email */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    aria-describedby="eamilUser"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            {/* password */}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    aria-describedby="passoword"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary mb-5"
                                onClick={handleSave}
                            >
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       </>
           
       
    )
}

export default Register