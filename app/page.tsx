import { Button, Col, Container, Row } from "react-bootstrap";
import Login from "./login";

export default function Home() {
  return (
    <main>
      <div>
      <Container className="text-center my-5">
            <Row>
                <Col md={12}>
                  <Login></Login>
                </Col>
            </Row>
        </Container>

      </div>
    </main>
  );
}
