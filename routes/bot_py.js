const request = require('request');
module.exports = function botApi(received_message) {
    const text = received_message
    const options = {
        url: 'http://127.0.0.1:5000/flask/' + text,
        method: 'GET',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
        }
    };
    request(options, function(err, res, body) {
        let json = JSON.parse(body);
        console.log(json)
    });
}