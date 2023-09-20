import React from 'react'
import Container from "react-bootstrap/Container";
import { BsFillCartFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useNavigate } from "react-router-dom";



const NavbarComp = () => {
    const auth = localStorage.getItem("user");
    const navigate = useNavigate();
    const logout = () => {
      console.log("user logout");
      localStorage.clear();
      navigate("/register");
    };
 
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <Link to="/" className="text-decoration-none text-danger fw-bold">
          Innorik
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {auth ? (
              <>
                {" "}
                <Link
                  to="/"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Home
                </Link>
                <Link
                  to="/add-article"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                Add Article
                </Link>
                <Link
                  to="/save-article"
                  className="py-2 ps-3 fw-semibold pe-4 text-decoration-none"
                >
               User Article
                </Link>
                <Link
                  to="/interests"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                InterestSelection
                </Link>
                <Link
                  to="/feed"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  NewsFeed
                </Link>
                <Link
                  to="/article-recommendations"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  ArticleRecommendations
                </Link>
                <Link
                  to="/register"
                  onClick={logout}
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Logout
                </Link>
                <Link
                  to="/"
                  className="py-2 ps-3 pe-4 text-secondary   fw-semibold text-decoration-none"
                >
                 { JSON.parse(auth).username} 
                </Link>{" "}
              </> 
            ) : (
              <>
                <Link
                  to="/register"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
                >
                  Login
                </Link>
              </>
            )}

            {/* {auth?<Link
              to="/signup" onClick={logout}
              className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
            >
              Logout
            </Link>:<Link
              to="/signup"
              className="py-2 ps-3 pe-4 fw-semibold text-decoration-none"
            >
              Sign Up
            </Link>} */}
          </Nav>
        </Navbar.Collapse>

       
      </Container>
    </Navbar>
  )
}

export default NavbarComp


