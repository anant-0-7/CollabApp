import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../../public/Navbar.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { userNotExists } from '../redux/reducers/auth';

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handleLogOut=async()=>{
    try{
        const {data}=await axios.get(`http://localhost:3000/user/logout`,{withCredentials:true});
        dispatch(userNotExists());
        navigate("/");
        

    }
    catch(e){
       
        console.log(e);
    }
}

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="navbar-container">
          <Navbar.Brand href="#home">CollabApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/all")}>All Projects</Nav.Link>
              <Nav.Link onClick={() => navigate("/my")}>My Projects</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button variant="outline-light" onClick={() => navigate("/create")} className="me-2">
                Create New Project
              </Button>
              <Button variant="outline-danger" onClick={handleLogOut}>
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
