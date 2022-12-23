const mongoose = reqiure("mongoose");

mongoose
  .connect("mongodb://localhost/digital-assets")
  .then((instance) =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch((error) => console.log("Connection failed", error));

module.exports = mongoose;
