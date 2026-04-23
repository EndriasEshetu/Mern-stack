# 🚀 MERN Dev Community Platform

A full-stack developer social platform built with the **MERN stack** where users can create profiles, share posts, and interact through likes and comments.

---

## 🌐 Overview

This app enables developers to:

- Create and manage professional profiles
- Share posts and engage with the community
- Showcase GitHub repositories
- Connect through likes and comments

Built with:

- **MongoDB + Express** (Backend API)
- **React + Redux** (Frontend SPA)
- **Node.js** runtime

---

## ✨ Features

### 🔐 Authentication

- JWT-based authentication
- Secure password hashing (`bcrypt`)
- Protected routes (backend + frontend)
- Persistent login (token-based)

### 👤 Profile Management

- Create/update developer profile
- Add skills, bio, social links
- Manage **experience & education**
- Delete account with full cleanup

### 📝 Social Features

- Create, delete posts
- Like / Unlike posts
- Comment system
- Remove own comments

### 🔍 Discovery

- Browse all developer profiles
- View individual profiles
- GitHub repo integration

### ⚙️ State & UX

- Redux global state
- Async actions with Thunk
- Alert/notification system
- Private route handling

---

## 🛠 Tech Stack

### Backend

- Node.js
- Express
- MongoDB + Mongoose
- JWT (`jsonwebtoken`)
- bcryptjs
- express-validator

### Frontend

- React
- Redux + Thunk
- React Router
- Axios
- React Icons
- Moment.js

### Dev Tools

- Nodemon
- Concurrently
- Create React App

---

## 📁 Project Structure

```bash
Mern-stack/
│
├── server.js
├── config/
├── middleware/
├── models/
├── routes/api/
│
└── client/
    └── src/
        ├── actions/
        ├── reducers/
        ├── components/
        ├── App.js
        └── store.js
```

---

## ⚙️ How It Works

1. User registers or logs in
2. Server validates & returns JWT
3. Token stored in `localStorage`
4. Protected routes use auth middleware
5. Redux manages global state
6. UI updates dynamically from API

---

## 🔌 API Endpoints

### Auth

```
POST   /api/users        → Register
POST   /api/auth         → Login
GET    /api/auth         → Current user
```

### Profile

```
GET    /api/profile
GET    /api/profile/me
POST   /api/profile
GET    /api/profile/user/:id
DELETE /api/profile
PUT    /api/profile/experience
DELETE /api/profile/experience/:id
PUT    /api/profile/education
DELETE /api/profile/education/:id
GET    /api/profile/github/:username
```

### Posts

```
POST   /api/posts
GET    /api/posts
GET    /api/posts/:id
DELETE /api/posts/:id
PUT    /api/posts/like/:id
PUT    /api/posts/unlike/:id
POST   /api/posts/comment/:id
DELETE /api/posts/comment/:id/:comment_id
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS)
- npm
- MongoDB (Atlas or local)

### Install

```bash
npm install
npm install --prefix client
```

### Configuration

Update `config/default.json`:

```json
{
  "mongoURI": "your_mongo_uri",
  "jwtSecret": "your_secret",
  "githubClientId": "your_id",
  "githubSecret": "your_secret"
}
```

⚠️ **Do not commit real credentials**

---

### Run App

```bash
npm run dev
```

- Frontend → [http://localhost:3000](http://localhost:3000)
- Backend → [http://localhost:5000](http://localhost:5000)

---

## 📜 Scripts

### Root

```bash
npm start        # Run backend
npm run server   # Backend (nodemon)
npm run client   # Frontend
npm run dev      # Run both
```

### Client

```bash
npm start
npm run build
npm test
```

---

## 🔄 User Flow

1. Register → Login
2. Create profile
3. Add experience & education
4. Explore developers
5. Create posts & interact

---

## 🔐 Environment & Security

- Uses `config` package (default.json)
- Recommended:
  - Move secrets to `.env`
  - Use environment variables in production
  - Rotate exposed credentials

---
