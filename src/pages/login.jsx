// LoginPage.js
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Default Admin Login
        if (username === "admin" && password === "admin123") {
            alert("Admin logged in successfully!");
            navigate("/data");
            return;
        }

        // Student Login
        try {
            const response = await axios.post("http://localhost:5000/api/student-login", {
                username,
                password,
            });

            if (response.data.success) {
                alert("Student logged in successfully!");
                navigate("/student-dashboard"); // Redirect to student dashboard
            } else {
                setError("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="card p-4 shadow-lg" style={{ width: "24rem" }}>
                <h2 className="text-center mb-4">Login to SparkVenture</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;