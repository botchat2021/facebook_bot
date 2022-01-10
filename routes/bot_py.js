const fetch = require('node-fetch');
module.exports = function botApi(received_message) {
    const text = received_message.text;
    const Url = 'http://127.0.0.1:5000/flask/' + text;
    var obj;
    fetch(Url).then(res => res.json())
        .then(data => obj = data)
        .then(() => console.log(obj));
}