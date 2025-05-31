
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoLogoGitlab } from "react-icons/io5";
import { LinkContainer } from 'react-router-bootstrap';
export function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" style={{ padding: "0px"}}> 
        <Container fluid style={{ padding: "0px", margin:"10px"}}>
            <div style={{ color: "white", fontSize: "30px", marginRight:"20px", marginLeft:"10px"} }>
  <IoLogoGitlab />
</div>

          <Navbar.Brand href="#home">Navify</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/product">
            <Nav.Link>Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/topProduct">
            <Nav.Link>Top Prdouct</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addtocart">
            <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          </Nav>
           
        </Container>
      </Navbar>
  );
}
