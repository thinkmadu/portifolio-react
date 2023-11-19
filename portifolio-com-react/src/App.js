import React from 'react';
import { Navbar, Nav, Container, Card, Row, Col } from 'react-bootstrap';
import './App.css'; // Certifique-se de importar o arquivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#welcome-section" style={{ color: "lightgrey" }}>Página de Portfólio Pessoal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto">
                <Nav.Link href="#welcome-section" style={{ color: "lightgrey" }}>Sobre</Nav.Link>
                <Nav.Link href="#projects" style={{ color: "lightgrey" }}>Trabalhos</Nav.Link>
                <Nav.Link href="#contacts" style={{ color: "lightgrey" }}>Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container id="welcome-section" className="welcome-section text-center">
          <h1>Olá, nós somos a equipe JOLIMA!</h1>
          <p>Estudantes de ciência da computação</p>
        </Container>

        <Container id="projects" className="projects text-center">
          <h2>Esses são alguns dos nossos Projetos</h2>
          <Row>
            <Col md={6}>
              <Card>
                <a href="https://github.com/LiviaNasc/formulario_pesquisa" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="https://drive.google.com/uc?export=view&id=1uH8BQp0A7mo9kWHhty5wZFKsgYa0Xx9_" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>Formulário de Pesquisa</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <a href="https://github.com/LiviaNasc/pagina_produto" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="https://drive.google.com/uc?id=1Xz1CgG9rMZe6gjTg4VIbAJ3IQEm_r2a6" />
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>Página de Produto</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>

        <Container id="contacts" className="contacts text-center">
          <div>
            <h2>Vamos trabalhar juntos...</h2>
            <p>Não gostaria de entrar para tomar uma xícara de café?</p>
          </div>
          <div>
            <h2>Contatos dos Colaboradores:</h2>
            <div className="student-contact">
              <a href="https://github.com/johndriguess" target="_blank" rel="noopener noreferrer">
                Github - John
              </a>
            </div>
            <div className="student-contact">
              <a href="https://github.com/LiviaNasc" target="_blank" rel="noopener noreferrer">
                Github - Lívia
              </a>
            </div>
            <div className="student-contact">
              <a href="https://github.com/thinkmadu" target="_blank" rel="noopener noreferrer">
                Github - Madu
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Portfolio;