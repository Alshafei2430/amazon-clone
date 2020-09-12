const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvYWFaga2M2G5aWw6jDVi41yv7zpjt3NHwsMLVcreBalyupSW2XQmY70OLBwY0IM7JDGLTPdlw5pBITdIM0y6000yGs4vKw6"
);
const app = express();
//Used to fix the Cross-Origin Access Control Issue
var corsPreflightHeaders = {
  methods: "GET,POST,OPTIONS",
  optionsSuccessStatus: 200,
  origin: "*",
  "cache-control": "no-cache",
  allowedHeaders: "Content-Type, Authorization",
};
app.use(cors(corsPreflightHeaders));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send("hello word");
});
app.post("/payments/create", async (req, res) => {
  console.log("Reqbody " + req.body);
  console.log("ReqTotal " + req.query.total);
  const total = req.query.total;
  console.log("Total : " + total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
const port = process.env.PORT || 5050;
app.listen(port, () => console.log("Listening on 5050"));
