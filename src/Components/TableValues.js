import { useEffect, useState } from 'react';

import { Card, Spinner } from 'react-bootstrap';

import TIKER from './../APIs/Tiker.js'
import ValuesTable from './ValuesTable.js';

import './TableValues.css'

function TableValues(props) {

    const [values, setValues] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getValues = async (name) => {

            const values = await TIKER.getATikerValues(name);
            setValues({ ...values });
            setLoading(false)
        }

        getValues(props.namePairs);

    }, [props.namePairs]);


    return (
        <>
            {
                loading ?
                <Spinner animation="grow" /> :
                    <Card  className='d-flex p-2'>
                        <Card.Header className="d-flex justify-content-center content-item-center">{props.namePairs}</Card.Header>
                        <Card.Body>
                            <Card.Text className="d-flex p-2 justify-content-center content-item-center align-content-start flex-wrap">
                                {loading ? <Spinner animation="grow" /> :
                                    <ValuesTable last={values.last} high={values.high} low={values.low} date={values.date}
                                        ask={values.ask} bid={values.bid} open={values.open} volume={values.volume} vwap={values.vwap} />
                                }
                            </Card.Text>
                        </Card.Body>
                    </Card>

            }

        </>

    );
}

export default TableValues;