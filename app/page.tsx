import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "./login";
import Logout from "./logout";

export default function Home() {
  return (
    <main>
      <div>
      <Container className="text-center my-5">
            <Row>
                <Col md={6}>
                  <Login></Login>
                </Col>
                <Col md={6}>
                  <Logout></Logout>
                </Col>
            </Row>
        </Container>

      </div>
    </main>
  );
}
