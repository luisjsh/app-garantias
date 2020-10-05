const mongoose = require("mongoose");
let internetConnection = true;
let URI = "";

if (internetConnection) {
  URI =
    "mongodb+srv://thepipo:123456luis@cluster0.npeqh.mongodb.net/appgarantias?retryWrites=true&w=majority";
} else if (!internetConnection) {
  URI = "mongodb://localhost/appluisalberto";
}

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("successfully connected"))
  .catch((error) => console.log(error));
