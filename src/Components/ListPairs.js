import { Card, Spinner} from 'react-bootstrap';

import Pairs from './Pairs';

function ListPairs(props) {

  return (

      <Card  >
        <Card.Header className="d-flex justify-content-center align-item-center">Pairs</Card.Header>
        <Card.Body>
          <Card.Text className="d-flex p-2 justify-content-center content-item-center align-content-start flex-wrap overflow-auto">
            {props.loading ? <Spinner animation="grow" /> :
              <>
                {
                  props.namePairs.map((pair) => {
                    return <tr>
                      <Pairs pair={pair} getName={props.getName} />
                    </tr>

                  })}
              </>
            }
          </Card.Text>
        </Card.Body>
      </Card>
  );


}

export default ListPairs;