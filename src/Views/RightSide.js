import { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ListPairs from '../Components/ListPairs';
import TableValues from '../Components/TableValues';


import TIKER from './../APIs/Tiker.js'

import './RightSide.css'



function RightSide(props) {

    const [namePairs, setNamePairs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [namePair, setNamePair] = useState("btcusd");

    useEffect(() => {

        const getPairsName = async () => {

            const pairs = await TIKER.getCurrencyPairs();
            setNamePairs(() => [...pairs])
            setNamePair(() => pairs[0])
            setLoading(false);

        }

        getPairsName();

    }, []);

    const getName = (namePair) => {

        console.log(namePair)
        setNamePair(namePair);
    }


    return (
        <>
            <Row className='d-flex p-1 vh-50'>
                <ListPairs namePairs={namePairs} loading={loading} getName={getName}></ListPairs>
            </Row>
           
            <Row className='d-flex p-1 vh-50'>
                <TableValues namePairs={namePair} loading={loading}></TableValues>
            </Row>
        </>




    );
}

export default RightSide;