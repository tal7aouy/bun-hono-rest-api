# 🚀 REST API

This REST API, skillfully crafted using Bun, Hono, MongoDB, and TypeScript, delivers a snappy and efficient platform. It’s engineered to ensure rapid data handling and smooth interactions, making it an ideal backbone for dynamic web applications.

## 📑 Table of Contents

- [🌟 Getting Started](#getting-started)
  - [🔧 Installations](#installations)
  - [⚙️ Configuration](#configuration)
  - [🔀 Routes](#routes)
  - [🔥 Usage](#usage)
- [🤝 Contributing](#contributing)
- [📄 License](#license)

## 🌟 Getting Started

Before diving in, ensure you have these installed:

- 🌍 [Bun](https://bun.sh)
- 📦 [MongoDB](https://mongodb.com) or 🧭 [MongoCompass](https://mongodb.com/products/compass)

### 🔧 Installations:

1. Clone this repository to your local machine 🖥️:

```bash
git clone https://github.com/tal7aouy/bun-hono-rest-api.git
```

2. Navigate to the project directory 📂:

```bash
cd bun-hono-rest-api
```

3. Install dependencies 📦:

```bash
bun install
```

To run 🏃‍♂️:

```bash
bun run dev
```

### ⚙️ Configuration

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

```
PORT=9000
MONGO_URI=mongodb://localhost:27017/bun-hono-rest-api
JWT_SECRET=secret
```

### 🔀 Routes

- `POST /api/v1/users` - Create User ✨
- `POST /api/v1/users/login` - Login User 🔑
- `GET /api/v1/users/profile` - Get User Profile 📄
- `GET /api/v1/users` - Get All Users 👥
- `GET /api/v1/users/:id` - Get User By ID 🔍

### 🔥 Usage

Create a user:

```json
{
  "name": "Med Talhaouy",
  "email": "talhaouy@example.com",
  "password": "1234567z"
}
```

Login:

```json
{
  "email": "talhaouy@example.com",
  "password": "1234567z"
}
```

## 🤝 Contributing

We welcome contributions to make our API even better! If you find a bug 🐞, have a feature request 💡, or want to suggest improvements, please create an issue in the GitHub repository. To contribute code, fork the repository, create a new branch, commit your changes, and open a pull request.

Please ensure that your code adheres to the existing coding style and conventions. 📝

## 📄 License

This project is under the cozy umbrella of the [MIT License](LICENSE).
