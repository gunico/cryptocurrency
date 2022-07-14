import { Table } from 'react-bootstrap';

function LineTable(props) {

    return (
     
        <Table responsive="sm">
        <thead>
          <tr> 
            <th>DATE</th>
            <th>LAST</th>
            <th>HIGH</th>
            <th>LOW</th>           
          </tr>
        </thead>

        <tbody>
        <tr>
          <td>{props.date}</td>
          <td>{props.last}</td>
          <td>{props.high}</td>
          <td>{props.low}</td>
        </tr>
        </tbody>

        <thead>
          <tr> 
            <th></th>
            <th>ASK</th>
            <th>BID</th>
            <th>OPEN</th>
                   
          </tr>
        </thead>

        <tbody>
        <tr>
          <td></td>
          <td>{props.ask}</td>
          <td>{props.bid}</td>
          <td>{props.open}</td>          
        </tr>
        </tbody>

        <thead>
          <tr> 
            <th></th>
            <th>VOLUME</th>
            <th>VWAP</th>
            <th></th>
                   
          </tr>
        </thead>

        <tbody>
        <tr>
          <td></td>
          <td>{props.volume}</td>
          <td>{props.vwap}</td>
          <td></td>          
        </tr>
        </tbody>
        
          
      </Table>

    );
}

export default LineTable