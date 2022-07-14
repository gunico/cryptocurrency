import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import './App.css';
import './Views/RightSide.css';
import Average from './Components/Average';
import RightSide from './Views/RightSide';

function App() {


  return (
    <Container>
      <Row>

        <Col>
          <Average />
        </Col>

        <Col>
          <RightSide />
        </Col>

      </Row>
    </Container>
  );
}

export default App;
