# Ticket Management System

## Project Overview

A MERN stack application used for managing tickets inside organizations.

Users can:
- create tickets
- assign tickets
- update ticket status
- track ticket progress

---

## Tech Stack

Frontend:
- React.js
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## User Roles

### Requester
- Create tickets
- View own tickets

### Admin
- View all tickets
- Assign tickets to team members

### Team Member
- View assigned tickets
- Update ticket status

---

## Setup Instructions

### Frontend

cd tickect-management

npm install

npm run dev

---

### Backend

cd backend

npm install

node server.js

---

## API Endpoints

### Auth APIs

POST /api/auth/register

POST /api/auth/login

GET /api/auth/team-members

---

### Ticket APIs

POST /api/tickets/create

GET /api/tickets/mytickets

GET /api/tickets/all

GET /api/tickets/assigned

PUT /api/tickets/assign

PUT /api/tickets/status

---

## Database

Collections:
- users
- tickets

---

## Features

- JWT Authentication
- Role-based Access
- Ticket Assignment
- Status Tracking
- Protected Routes

---
