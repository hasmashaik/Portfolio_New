markdown
# Hasma Shaik | Full Stack Developer Portfolio

A modern, responsive personal portfolio website showcasing my work as a Full Stack Developer. Built with React, Three.js, Node.js, and Neon PostgreSQL.

##  Features

- **Interactive 3D Hero Section** - Built with Three.js and React Three Fiber
- **Fully Responsive** - Works on all devices from mobile to 4K
- **Dark Theme** - Premium black + neon green design
- **Contact Form** - Stores messages in PostgreSQL database
- **GitHub Integration** - Shows live repository statistics
- **Smooth Animations** - Framer Motion for elegant transitions
- **Resume Download** - One-click PDF download
- **Project Showcase** - Featured projects with live demos

##  Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Three.js / React Three Fiber
- Axios

### Backend
- Node.js
- Express.js
- Prisma ORM
- Neon PostgreSQL
- Helmet, CORS, Rate Limiting

##  Project Structure
portfolio/
├── frontend/ # React frontend application
├── backend/ # Node.js backend API
├── .gitignore
└── README.md

text

##  Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (Neon, Render, or local)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/hasmashaik/portfolio.git
cd portfolio
2. Backend Setup

bash
cd backend
npm install
cp .env.example .env
# Add your DATABASE_URL to .env
npx prisma generate
npx prisma migrate dev --name init
npm run dev
3. Frontend Setup

bash
cd frontend
npm install
cp .env.example .env
# Add VITE_API_URL to .env
npm run dev
4. Access the application

Frontend: http://localhost:5173

Backend: http://localhost:5000

 API Endpoints
Method	Endpoint	Description
GET	/api/health	Health check
GET	/api/projects	Get featured projects
GET	/api/projects/:id	Get project by ID
GET	/api/projects/github	Get GitHub repositories
POST	/api/contact	Send contact message
 Deployment
Backend (Render)
Push code to GitHub

Create Web Service on Render

Set environment variables

Deploy

Frontend (Vercel)
Import repository to Vercel

Set environment variable VITE_API_URL

Deploy

Database (Neon PostgreSQL)
Create account at neon.tech

Create a new project

Copy connection string

Add to environment variables

Environment Variables
Backend (.env)
env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
CLIENT_URL=http://localhost:5173
GITHUB_USERNAME=hasmashaik
Frontend (.env)
env
VITE_API_URL=http://localhost:5000
 Responsive Design
Mobile (320px - 480px)

Tablet (768px - 1024px)

Laptop (1024px - 1366px)

Desktop (1366px - 1920px)

4K (1920px+)

 Color Palette
Color	Hex	Usage
Neon Green	#39FF14	Primary accent
Dark	#050505	Background
Charcoal	#0F0F0F	Sections
White	#FFFFFF	Primary text
Light Gray	#B0B0B0	Secondary text
 License
© 2026 Hasma Shaik. All rights reserved.

 Contact
GitHub: @hasmashaik

LinkedIn: Hasma Shaik

<div align="center"> Built with ❤️ by Hasma Shaik </div> ```
 backend/README.md
markdown
# Portfolio Backend API

Node.js + Express backend for Hasma Shaik's portfolio.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/projects` | Get featured projects |
| GET | `/api/projects/:id` | Get project by ID |
| GET | `/api/projects/github` | Get GitHub repositories |
| POST | `/api/contact` | Send contact message |

## Installation

```bash
npm install
cp .env.example .env
# Add DATABASE_URL
npx prisma generate
npx prisma migrate dev --name init
npm run dev
Environment Variables
env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
CLIENT_URL=http://localhost:5173
GITHUB_USERNAME=hasmashaik
Tech Stack
Node.js

Express.js

Prisma ORM

Neon PostgreSQL

text

---

##  `frontend/README.md`

```markdown
# Portfolio Frontend

React frontend for Hasma Shaik's portfolio.

## Installation

```bash
npm install
cp .env.example .env
# Add VITE_API_URL
npm run dev
Environment Variables
env
VITE_API_URL=http://localhost:5000
Tech Stack
React 18

Vite

Tailwind CSS

Three.js

Framer Motion

text

---

##  Quick Commands Summary

```bash
# Clone
git clone https://github.com/hasmashaik/portfolio.git
cd portfolio

# Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev

README.md	Main project documentation
backend/README.md	Backend-specific docs
frontend/README.md	Frontend-specific docs
