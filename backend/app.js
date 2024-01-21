const bodyParser = require("body-parser");
const express = require("express");

const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

require("dotenv").config();
const backend_port = process.env.backend_port;

console.log("backend_port", backend_port);

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
	next();
});

app.use(authRoutes);

app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
	const status = error.status || 500;
	const message = error.message || "Something went wrong.";
	res.status(status).json({ message: message });
});

app.listen(backend_port || 8080, () =>
	console.log(`Server is listening on ${backend_port || 8080}`)
);
