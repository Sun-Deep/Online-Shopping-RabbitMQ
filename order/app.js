const express = require("express");
const cors = require("cors");
const app = express();

const producer = require("./producer");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/order", async (req, res) => {
  try {
    const data = req.body;
    await producer(data);
    return res.status(200).json({
      message: "Ordered Successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3001, (err) => {
  if (err) {
    console.err(err);
  } else {
    console.log("Server for Order API started at: http://localhost:3001");
  }
});
