const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function callTwilioApi(phone, firstname, lastname, email) {
  client.messages
    .create({
      body: `Hello Mr/Mrs. ${firstname} ${lastname}. We have received your order for Triumph Motorcycle. We have sent you mail on: ${email}. Please check.`,
      from: "+14153354120",
      to: "+9779817476837",
    })
    .then((message) => console.log(`Sent message to ${message.to}`))
    .catch((err) => console.log(err));
}

module.exports = callTwilioApi;
