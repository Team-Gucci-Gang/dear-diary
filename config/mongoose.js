const env = require("./environment");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

//  mongoose.connect('mongodb://127.0.0.1/sensus_database');
const db = mongoose.connection;

//unsuccessful connection
db.on(
  "error",
  console.error.bind(console, "Error establishing connection to the database")
);

//successful connection
db.once("open", function () {
  console.log("Connected to the Database::MongoDB");
});

module.exports = db;
