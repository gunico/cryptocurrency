import { useEffect, useState } from 'react';

import { ResponsiveLine } from '@nivo/line'

import TIKER from './../APIs/Tiker.js'






/**
 * 
  const [clock, setClock] = useState(() => {
  const time = new Date();

  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds()
  };
});

uso timer

useEffect(() => {
  const interval = setInterval(() => {
    const time = new Date();

    setClock({
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    });
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);

 */


function Linechart(props) {

    const [currency] = useState(props.name);

    const [d, setD] = useState(true);

    const [values, setValues] = useState([{
        "id": props.name,
        "color": "hsl(34,70%,50%)",
        "data": [{}]
    }]);


    useEffect(() => {

        const fetchValue = async (name) => {
            setD(false)
            const lastValue = await TIKER.getATikerValue(name);


            setValues((oldData) => {
                let data = [...oldData[0].data];
                if (oldData[0].data.length === 10) {
                    oldData[0].data.shift()
                    data = [...oldData[0].data];
                }
                const nd = [{
                    "id": oldData[0].id,
                    "color": oldData[0].color,
                    "data": [...data, { "x": lastValue, "y": lastValue }]
                }];

                console.log("ND 2 " + nd[0].data[0].x)
                return nd;
            })

        }

        let i = 0
        while (i < 20) {


            if (d) {
                setTimeout(() => fetchValue(currency), 10000);
                //setNValues(nv => nv + 1);
                setD(false)
            }
            //clearTimeout(timeOutID);
            //fetchValue(currency);
            i++;
        }


    }, [currency, d]);


    const MyResoibsuveLine = (data) => (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )

    return (
        <>
            {MyResoibsuveLine(values)}
        </>

    );
}

export default Linechart;