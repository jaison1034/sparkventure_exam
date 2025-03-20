import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="vh-100 d-flex flex-column" style={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", minHeight: "100vh" }}>
            {/* Navbar with SparkVenture Text and Login Button */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "#3674B5", fontWeight: "bold" }}>
                        SparkVenture
                    </a>
                    <div className="ms-auto">
                        <Link
                            to="/login"
                            className="btn btn-outline-primary btn-sm rounded-pill px-4"
                        >
                            LOGIN
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                <div className="card text-center shadow-lg" style={{ width: "28rem", border: "none", borderRadius: "15px" }}>
                    <div className="card-body p-5">
                        <h2 className="card-title mb-4" style={{ color: "#3674B5" }}>Welcome to SparkVenture!</h2>
                        <p className="card-text mb-4" style={{ color: "#555" }}>
                            Join us for an exciting event filled with innovation and creativity.
                        </p>
                        <Link
                            to="/register"
                            className="btn btn-primary rounded-pill px-4"
                            style={{ backgroundColor: "#3674B5", border: "none" }}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center py-3 bg-light shadow-sm">
                <p className="mb-0" style={{ color: "#777" }}>&copy; 2023 SparkVenture. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;