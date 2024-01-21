const express = require("express");
const { add, get } = require("../data/user");
const { createJSONToken, isValidPassword } = require("../util/auth");
const { isValidEmail, isValidText } = require("../util/validation");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
	const data = req.body;
	console.log(data);
	let errors = {};

	if (!isValidEmail(data.email)) {
		errors.email = "Invalid email.";
	} else {
		try {
			const existingUser = await get(data.email);
			// const existingUser = await Users.findOne(data.email);
			console.log(existingUser);
			if (existingUser) {
				errors.email = "Email exists already.";
			}
		} catch (error) {}
	}

	if (!isValidText(data.password, 6)) {
		errors.password =
			"Invalid password. Must be at least 6 characters long.";
	}

	if (Object.keys(errors).length > 0) {
		return res.status(422).json({
			message: "User signup failed due to validation errors.",
			errors,
		});
	}

	try {
		const createdUser = await add(data);
		// const createdUser = await Users.create(data);
		const authToken = createJSONToken(createdUser.email);
		res.status(201).json({
			message: "User created.",
			user: createdUser,
			token: authToken,
		});
	} catch (error) {
		next(error);
	}
});

router.post("/login", async (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	let user;
	try {
		user = await get(email);
		// user = await Users.findOne({ email });
		console.log(user);
	} catch (error) {
		return res.status(401).json({ message: "Authentication failed." });
	}

	const pwIsValid = await isValidPassword(password, user.password);
	console.log(pwIsValid);
	if (!pwIsValid) {
		return res.status(422).json({
			message: "Invalid credentials.",
			errors: { credentials: "Invalid email or password entered." },
		});
	}

	const token = createJSONToken(email);
	// console.log(token);
	// console.log(email);
	res.json({ token });
});

module.exports = router;
