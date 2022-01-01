const request = require('request');
const senderAction = require('../templates/senderAction');
const sendMessage = require('../templates/sendMessage');
const sendGenericTemplate = require('../templates/sendGenericTemplate');
const { response } = require('express');
module.exports = function processMessage(event) {
    if (!event.message.is_echo) {
        const message = event.message;
        const senderID = event.sender.id;
        console.log("Received message from senderId: " + senderID);
        console.log("Message is: " + JSON.stringify(message));
        if (message.text) {
            // now we will take the text received and send it to an food tracking API.
            // let text = message.text;
            let response = {
                "text": `You sent the message: "${message.text}". Now send me an image!`
            }
            senderAction(senderID);
            sendMessage(senderID, response);
        }
    }
}