import { useEffect, useState } from 'react';

import { Card, Spinner } from 'react-bootstrap';

import TIKER from './../APIs/Tiker.js'
import './Average.css'

function Average() {

    const [average, setAverage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getAvg = (values) => {
            let sum = 0;
            for (const v of values) {
                sum += v;
            }
            return (sum / values.length).toFixed(2);
        }

        const getValues = async () => {
            const values = await TIKER.getAllFakeTikerValues();
            setAverage(() => getAvg(values));
            setLoading(false);
        }
        getValues();

    }, []);

    return (
        <>
            <Card className='d-flex p-2 vh-100'>
                <Card.Header className="d-flex justify-content-center align-content-center">Average</Card.Header>
                <Card.Body>
                    <Card.Text className="d-flex justify-content-center align-content-center" >
                        {loading ? <Spinner animation="grow" /> : average}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Average;