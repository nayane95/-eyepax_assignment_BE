const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// use PORT 3600
const port = process.env.PORT || 3600;

// routings
const api = require("./routes/api");

app.use(express.json());
app.use(cors());
app.use("/api", api);

// Establishing database connection
async function connect() {
	try {
		mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("connected mongodb");
	} catch (error) {
		console.log(error);
	}
}

connect();

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
