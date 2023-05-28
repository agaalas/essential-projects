const app = require("./app");
const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect(
    "mongodb+srv://elal:YCm0rRn8CZbGP3Cb@cluster0.jdv5r.mongodb.net/cars3"
  );
  console.log("mongo db was successfull");
}

connectDb()

app.listen(3010, () => {
  console.log("server listen");
});
