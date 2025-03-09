![17393485342363047538233811178163](https://github.com/user-attachments/assets/82f8edc2-eeb1-4e96-8fb3-93c36455fee8)

Authentication System

A secure and robust authentication system built using the MERAN Stack (MongoDB, Express.js, React.js, Angular, Node.js). This project provides user authentication with OTP verification and password reset via Gmail confirmation, ensuring high security and user-friendly experience.

🚀 Project Overview

The Authentication System is designed to provide a seamless and secure login/signup experience with modern authentication practices. It includes:

User registration with email verification

Secure login with encrypted credentials

OTP-based verification for added security

Password reset with Gmail confirmation

Role-based authentication (if applicable)


✨ Features

✅ User Signup & Login – Register and log in securely using email and password
✅ OTP Verification – Extra security layer with OTP verification
✅ Password Reset via Gmail – Reset passwords securely with a confirmation link
✅ Token-based Authentication – Uses JWT (JSON Web Token) for authentication
✅ MongoDB Integration – Store user data securely
✅ Multi-Frontend Support – React.js and Angular versions included

🛠 Tech Stack

Frontend: React.js & Angular

Backend: Node.js, Express.js

Database: MongoDB

Authentication: JWT, bcrypt, Nodemailer for email verification

Other Tools: Dotenv, Mongoose, Axios


📌 Installation Guide

Follow these steps to set up the project on your local machine:

1️⃣ Clone the Repository

git clone https://github.com/your-username/authentication-system.git
cd authentication-system

2️⃣ Install Dependencies

Backend

cd backend
npm install

Frontend (React)

cd frontend-react
npm install

Frontend (Angular)

cd frontend-angular
npm install

3️⃣ Setup Environment Variables

Create a .env file in the backend directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_gmail_email
EMAIL_PASS=your_gmail_password

4️⃣ Run the Application

Start Backend

cd backend
npm start

Start Frontend (React)

cd frontend-react
npm start

Start Frontend (Angular)

cd frontend-angular
ng serve

📌 Usage

1️⃣ Sign Up – Create an account with an email and password
2️⃣ Login – Enter credentials to access the dashboard
3️⃣ OTP Verification – Enter the OTP sent to email for verification
4️⃣ Password Reset – Request a password reset, receive a Gmail confirmation link, and update the password
5️⃣ Access Control – Secured routes accessible only to authenticated users

🔑 Environment Variables

The following environment variables need to be configured in the backend .env file:

MONGO_URI → MongoDB connection string

JWT_SECRET → Secret key for JWT authentication

EMAIL_USER → Gmail email for sending OTP & password reset

EMAIL_PASS → Gmail app password


🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository


2. Create a new branch (feature-branch-name)


3. Commit your changes


4. Push to the branch


5. Create a pull request



📜 License

This project is licensed under the MIT License.


---

