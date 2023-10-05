// backend/config.js
require("dotenv").config(); // Load environment variables from .env file

// Access the environment variable by name (replace 'YOUR_ENV_VARIABLE_NAME' with the actual variable name)
const KEY = process.env.KEY;

module.exports = {
	KEY,
};
