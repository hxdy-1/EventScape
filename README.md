# EventScape

EventScape is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It serves as an admin-only platform for managing events. Registered users can perform operations such as viewing, updating, deleting, and posting new events. Non-registered users have the ability to browse and view all events along with their details.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Preview](#preview)

## Features

1. **User Authentication:** Secure user authentication using JWT (JSON Web Tokens) and bcrypt for password hashing.

2. **Event Operations:**
   - View: Registered users can view a list of events.
   - Update: Users with admin privileges can update event details.
   - Delete: Admins can delete events.
   - Post: Admins can post new events.

3. **Non-Registered User Access:** Non-registered users can browse and view all events and their details.

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (Object Modeling for MongoDB)
- JWT (JSON Web Tokens for authentication)
- Bcrypt.js (Password hashing)

### Frontend

- React.js
- React Router DOM (Declarative routing for React.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/EventScape.git
   ```

2. Navigate to the project directory:

   ```bash
   cd EventScape
   ```

3. Install dependencies:

   ```bash
   # Install global dependencies
   npm install

   # Navigate to the backend directory and install server-side dependencies
   cd backend
   npm install

   # Navigate to the frontend directory and install client-side dependencies
   cd frontend
   npm install
   ```

## Usage

1. Set up MongoDB: Make sure to have MongoDB installed and running.

2. Configure Environment Variables: Create a `.env` file in the root directory and set the necessary environment variables, including MongoDB connection URI, JWT secret, etc.

   ```env
   MONGODB_URI=your-mongodb-connection-uri
   JWT_SECRET=your-jwt-secret
   ```

3. Start the application:

   ```bash
   # Start the server
   cd backend
   npm start

   # Navigate to the client directory and start the React app
   cd client
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! (want to add user and admin logins separately, as per now whoever login, is an admin)

## Preview

**Home page:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/7da6b602-1bc7-4617-8b0d-6c971faa3122)

**All events page:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/efe3621d-665b-48d6-9114-1e386dfc6809)

**Add new event:** 
![image](https://github.com/hxdy-1/EventScape/assets/115286446/c842873b-b4e8-4f5d-b042-ca152d4bf063)

**Event details page:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/47dac235-edd7-4737-b546-b399f24d6cea)

**Newsletter page:** 
![image](https://github.com/hxdy-1/EventScape/assets/115286446/3ff79483-3643-4d78-aa60-083eb33d607c)

**Login & Register page:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/5c586413-4d30-412c-89d3-31f08f9b039e)
![image](https://github.com/hxdy-1/EventScape/assets/115286446/232b619d-acf4-4f3d-a3ac-f58cc9b1cc6e)

**Users collection in MongoDB:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/5ed5c38e-5541-45c0-adaa-45eb74aa9f85)

**Events collection in MongoDB:**
![image](https://github.com/hxdy-1/EventScape/assets/115286446/c0600023-220c-437b-907e-c8fd8c6c37cb)
