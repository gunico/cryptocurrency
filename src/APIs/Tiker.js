function genRandom() {
    return Math.random().toFixed(2) * 10000;
}

async function getAllFakeTikerValues() {
    const values = [genRandom(), genRandom(), genRandom()];
    console.log("Valori generati ", [...values])
    return values;
}

async function getAllTikerValues() {
    // Array of URLs
    const urls = ['https://www.bitstamp.net/api/v2/ticker/btcusd',
        'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
        'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUS'];

    const promises = urls.map(url => fetch(url));

    const checkResponse = (resp) => {
        if (!resp.ok) {
            throw Error(resp.statusText);
        }
        let type = resp.headers.get('Content-Type');

        if (type.split(' ')[0] !== 'application/json') {
            throw new TypeError(`Expected JSON, got ${type}`);
        }
    }

    //Wait for all promises
    Promise.all(promises)
        .then(results => {

            let result = [];
            for (const res of results) {
                if (res.url === urls[0]) {
                    checkResponse(res);
                    const value = res.json();
                    result = [...result, value.last];
                }
                if (res.url === urls[1]) {
                    checkResponse(res);
                    const value = res.json();
                    result = [...result, value.data.rates.USD];
                }
                if (res.url === urls[2]) {
                    checkResponse(res);
                    const value = res.body[0][1];
                    result = [...result, value];
                }
            }

            return result;

        })
        .catch(e => console.error(e))
}

async function getCurrencyPairs() {
    try {
        const response = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/');

        if (!response.ok) {
            throw Error(response.statusText);
        }
        let type = response.headers.get('Content-Type');

        if (type.split(' ')[0] !== 'application/json') {
            throw new TypeError(`Expected JSON, got ${type}`);
        }

        const values = await response.json();

        let pairs = [];

        for (const v of values) {
            pairs = [...pairs, v.url_symbol]
        }

        return pairs;
    } catch (err) {
        console.log(err);
    }
}

async function getATikerValues(path) {

    function giveTime(timestamp) {
        const a = new Date(timestamp * 1000);
        const year = a.getFullYear();
        const month = a.getMonth();
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        const time = date + '-' + month + '-' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    try {
        const response = await fetch('https://www.bitstamp.net/api/v2/ticker/' + path);

        if (!response.ok) {
            throw Error(response.statusText);
        }
        let type = response.headers.get('Content-Type');

        if (type.split(' ')[0] !== 'application/json') {
            throw new TypeError(`Expected JSON, got ${type}`);
        }

        const values = await response.json();
        const val = {
            "name": path,
            "high": values.high,
            "last": values.last,
            "ask": values.ask,
            "low": values.low,
            "bid": values.bid,
            "open": values.open,
            "volume": values.volume,
            "date": giveTime(values.timestamp),
            "vwap": values.vwap
        }

        return val;

    } catch (err) {
        console.log(err);
    }
}


const TIKER = { getAllTikerValues, getCurrencyPairs, getATikerValues, getAllFakeTikerValues };
export default TIKER;