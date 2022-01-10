const fetch = require('node-fetch');
module.exports = function botApi(received_message) {
    const text = received_message.text;
    const Url = 'http://127.0.0.1:5000/flask/' + text;

    fetch(Url).then(data => { return data.json() })
        .then(res => { console.log(res) })
        .catch(error => console.log(error));
}