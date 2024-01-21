require("dotenv").config();
const mongo_url = process.env.mongo_url;

console.log(mongo_url);

const mongoose = require("mongoose");

mongoose.connect(mongo_url);

const UsersSchema = new mongoose.Schema({
	email: String,
	password: String,
	id: String,
});

const EventsSchema = new mongoose.Schema({
	title: String,
	image: String,
	date: Date,
	description: String,
	id: String,
});

const Users = mongoose.model("users", UsersSchema);
const Events = mongoose.model("events", EventsSchema);

module.exports = {
	Users,
	Events,
};
