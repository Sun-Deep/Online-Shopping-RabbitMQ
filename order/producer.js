const amqp = require("amqplib");

module.exports = async (data) => {
  try {
    const rabbitmqServer = "amqp://localhost:5672";
    const connection = await amqp.connect(rabbitmqServer);
    const channel = await connection.createChannel();
    await channel.assertQueue("shopping");
    await channel.sendToQueue("shopping", Buffer.from(JSON.stringify(data)));
    console.log("Order details sent successfully to rabbitmq server");
    await channel.close();
    await connection.close();
  } catch (error) {
    console.log(error);
  }
};
