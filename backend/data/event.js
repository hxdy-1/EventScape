const { NotFoundError } = require("../util/errors");
const { Events } = require("../DB/db");

// Retrieving all events:
async function getAll() {
	const storedData = await Events.find();
	// console.log("All events: ", storedData);

	if (!storedData || storedData.length === 0) {
		throw new NotFoundError("Could not find any Events.");
	}
	return storedData;
}

// Retrieving an event by its _id:
async function get(id) {
	// console.log("id from get: ", id);
	const event = await Events.findOne({ _id: id });

	// console.log("single event: ", event);
	if (!event) {
		throw new NotFoundError("Could not find event for id " + id);
	}
	return event;
}

// Adding a new event:
async function add(data) {
	// Creating a new instance/document of the Events model
	// console.log("data from add: ", data);
	const newEvent = new Events({ ...data });

	// console.log("newly added event: ", newEvent);
	await newEvent.save();
}

// Replace an existing event by its ID
async function replace(id, data) {
	// console.log("id from replace: ", id);
	// console.log("data from replace: ", data);
	const event = await Events.findByIdAndUpdate(
		id,
		{ ...data, id },
		{ new: true, runValidators: true }
	);

	// Throw an error if the event is not found
	if (!event) {
		throw new NotFoundError("Could not find event for id " + id);
	}
}

// Remove an event by its ID
async function remove(id) {
	// await Events.deleteOne({ id });
	console.log("id from remove: ", id);
	await Events.findByIdAndDelete(id);
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
