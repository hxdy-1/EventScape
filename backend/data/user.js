const { hash } = require("bcryptjs");
const { NotFoundError } = require("../util/errors");
const { Users } = require("../DB/db");

async function add(data) {
	const hashedPw = await hash(data.password, 12);

	// Create a new user instance/document using the Users model:
	const newUser = new Users({ ...data, password: hashedPw });
	await newUser.save();

	return { id: newUser.id, email: newUser.email };
}

async function get(email) {
	// Using the findOne method on the Users model to find a user by email
	const user = await Users.findOne({ email });

	if (!user) {
		throw new NotFoundError("Could not find user for email " + email);
	}

	return user;
}

exports.add = add;
exports.get = get;
