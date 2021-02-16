const amqp = require("amqplib");

module.exports = async (data) => {
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
    await channel.sendToQueue("shopping", Buffer.from(JSON.stringify(data)));
    console.log("Order details sent successfully to rabbitmq server");
    await channel.close();
    await connection.close();
  } catch (error) {
    console.log(error);
  }
};
