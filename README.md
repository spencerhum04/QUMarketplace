# QUMarketplace

Functional Requirements:
- Users should be able to log in with their email and password
- Users should be able sign up for an account using their email and password
- Users should be able to create posts
- Users should be able to create messages
- Users should receive notifications after receiving a message
- to be continued
Non-Functional Requirements:
- Passwords must be hashed to maintain security
- The app should be easy for first-time users
- The service should be available 99.9% of the time
- Support for major browsers and devices

Dependencies:
- bcrypt: Securely hashing and verifying passwords
- cookie-parser: Middleware to parse cookies attached to client requests
- dotenv: Loads environment variables from a .env file for configuration
- express: Fast and minimal web framework for Node.js to build the server
- jest: JavaScript testing framework used to write and run unit and integration tests
- jsonwebtoken: Handles creation and verification of JSON Web Tokens for authentication
- mongoose: MongoDB object modeling tool to manage data schemas and queries
- nodemon: Development utility that automatically restarts the server on code changes
