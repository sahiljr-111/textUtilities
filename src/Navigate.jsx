import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigate(props) {
  return (
    <>
      <Navbar className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} expand="lg">
        <Container>
          <div className='d-flex w-100 justify-content-between align-items-center'>
            <div>
              <Navbar.Brand href="/">iCoding</Navbar.Brand>
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">About</Nav.Link>
                  <div>
                    <Nav.Link href="#link">
                      <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggle} />
                        <label className="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mode == 'light' ? "Dark" : "Light"} mode</label>
                      </div>
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar >
    </>
  );
}

export default Navigate;