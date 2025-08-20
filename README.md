📂 Drive Project (Backend)

A backend application built using Node.js, Express, and MongoDB that simulates a cloud drive system.

🚀 Features

🔑 User Authentication – Secure signup & login with JWT and bcrypt

📁 File Management – Upload, download, delete, and organize files/folders

🗂 MongoDB Integration – Store user data, file metadata, and access permissions

⚡ RESTful API structure for easy integration with frontend


🛠️ Tech Stack

Backend: Node.js, Express.js

Database: MongoDB (Mongoose ORM)

Authentication: JWT + bcrypt

Other Tools: Multer (for file uploads), dotenv, nodemon, etc.


📌 Setup Instructions

Clone the repo:

git clone https://github.com/your-username/drive-project.git
cd drive-project


Install dependencies:

npm install


Create a .env file and add:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret
PORT=5000


Run the server:

npm start

📡 API Endpoints (sample)

POST /api/auth/register → Register user

POST /api/auth/login → Login user

POST /api/files/upload → Upload file

GET /api/files/:id → Get file details

DELETE /api/files/:id → Delete file
