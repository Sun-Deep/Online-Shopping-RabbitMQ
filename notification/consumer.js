const amqp = require("amqplib");
const callTwilioApi = require("./twilio");

module.exports = async () => {
  try {
    const rabbitmqServer = "amqp://localhost:5672";
    const connection = await amqp.connect(rabbitmqServer);
    const channel = await connection.createChannel();
    await channel.assertQueue("shopping");

    await channel.consume(
      "shopping",
      (order) => {
        let data = JSON.parse(order.content.toString());
        callTwilioApi(data.phone, data.firstname, data.lastname, data.email);
      },
      {
        noAck: true,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
