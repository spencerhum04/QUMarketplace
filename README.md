# QUMarketplace: Marketplace Web App

[![Static Badge](https://img.shields.io/badge/React-09d9fe?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Static Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Static Badge](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/spencerhum04/QUMarketplace/unit-tests.yml?style=for-the-badge&label=Unit%20Tests)](https://github.com/spencerhum04/QUMarketplace/blob/main/.github/workflows/unit-tests.yml)

QUMarketplace is a fullstack web application simulating a marketplace platform inspired by Facebook Marketplace. Users can sign up, log in, create posts to sell items, send messages, and receive notifications.
This project is built using the MERN stack with TypeScript for type safety and Jest for unit testing, focusing on a clean architecture and scalable system design.

## System Architecture
The application follows a modular MERN architecture:
- **Frontend:** React SPA providing a dynamic, responsive user interface
- **Backend:** Express.js API server handles business logic, REST endpoints, and authentication
- **Database:** MongoDB stores user data, posts, messages, and notifications
- **Authentication:** JSON Web Tokens (JWT) for secure stateless authentication
- **Security:** Passwords are hashed with bcrypt; cookies managed securely with cookie-parser

## Key Features
- User registration and login with secure authentication  
- CRUD operations for marketplace posts  
- User-to-user messaging system  
- Real-time notifications on new messages

## Database Schema
- **Users:** Stores user profiles, credentials (hashed passwords), and authentication tokens.
- **Posts:** Contains product listings with title, description, price, and seller info.
- **Messages:** Tracks communication between users with timestamps.
- **Notifications:** Alerts users of new messages or relevant events.

## API Endpoints
| Endpoint               | Method | Description                             | Auth Required |
|------------------------|--------|---------------------------------------|---------------|
| `/api/users/register`  | POST   | Register a new user                    | No            |
| `/api/users/login`     | POST   | Authenticate user and issue JWT       | No            |
| `/api/users/logout`    | GET    | Log out the current user               | No            |
| `/api/users/bookmark/:id` | PUT  | Bookmark a post by ID                  | Yes           |
| `/api/users/profile/:id` | GET   | Get profile data for user by ID        | Yes           |
| `/api/users/otheruser/:id` | GET  | Get another user's profile info         | Yes           |

| `/api/posts/create`    | POST   | Create a new post                     | Yes           |
| `/api/posts/delete/:id`| DELETE | Delete a post by ID                   | Yes           |
| `/api/posts/like/:id`  | PUT    | Like or dislike a post by ID         | Yes           |

| `/api/messages/send`   | POST   | Send a message to another user       | Yes           |

## Security & Testing
- Passwords hashed with **bcrypt** before storage  
- JWT tokens securely stored in HttpOnly cookies  
- Input validation and sanitization on backend  
- Unit tests run with **Jest**, integrated with GitHub Actions CI
