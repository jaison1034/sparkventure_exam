import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="vh-100 d-flex flex-column" style={{ background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", minHeight: "100vh" }}>
            {/* Navbar with Logo and Login Button */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src="data:image/png;base64,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" // Replace with your logo URL
                            alt="SparkVenture Logo"
                            className="me-2"
                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                        />
                        <span className="font-weight-bold" style={{ color: "#3674B5" }}>SparkVenture</span>
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