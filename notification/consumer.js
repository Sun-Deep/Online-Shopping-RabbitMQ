const amqp = require("amqplib");
const callTwilioApi = require("./twilio");

module.exports = async () => {
  try {
    let rabbitmqServer
    let retry = 10
    while(retry >= 0){
      try {
        rabbitmqServer = "amqp://guest:guest@my-rabbit:5672";
        break
      } catch (err) {
        console.log(err)
        retry -= 1
        console.log(`Retrying left ${retry}`)
        await new Promise(resolve => setTimeout(resolve, 10000))
      }
    }
    
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
