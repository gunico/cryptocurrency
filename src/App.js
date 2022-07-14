import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import './App.css';
import Average from './Components/Average';
import RightSide from './Views/RightSide';

function App() {


  return (
    <Container className='d-flex vh-100'>
      <Row>

        <Col>
          <Average />
        </Col>

        <Col>
          <RightSide className='d-flex vh-100'/>
        </Col>

      </Row>

    </Container>
  );
}

export default App;
