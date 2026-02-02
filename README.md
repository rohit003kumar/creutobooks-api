Creuto Books API

This project is a simple Books API built using Node.js, Express, and MongoDB.

Tech Stack:
- Node.js
- Express.js
- MongoDB
- Mongoose

How to Run:
1. Install packages:
   npm install

2. Create .env file:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

3. Start server:
   npm start

API:
POST /api/books  -> create book
GET  /api/books  -> get all books with search, filter, pagination

Run the server:
node index.js

Seed Database:
node seed/seedBooks.js

Author:
Rohit Kumar
