# Ticktech-IT-solution

## Setup the project 
clone the repo run the following commands in the root directory of the project: 

```
npm install
npm run dev
```

## Setup the Environment Variables

```
PORT = Port number
MONGO_URL = Database url
JWT_KEY = hellotherehowareyou

```

## Folder Structure

```
server\
 |--index.js        # App entry point
 |--controllers\    # Route Controller (Logics of api's)
 |--models\         # Mongoose models
 |--routes\         # Routes
```

## Api Endpoints


List of available routes:

**User routes**:\
`GET /api/users/` - get all user\
`GET /api/users/:userId` - get user by Id\
`POST /api/users/` - create user \
`PUT /api/users/:userId` - update user by Id\
`DELETE /api/users/:userId` - delete user by Id\
