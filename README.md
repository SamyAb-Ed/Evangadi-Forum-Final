# Evangadi Forum Final

A full-stack forum application built with React and Node.js.

## 🚀 Deployment Instructions

### Frontend (Netlify)

1. Go to [Netlify](https://app.netlify.com/start/repos/SamyAb-Ed%2FEvangadi-Forum-Final)
2. Connect your GitHub account
3. Select the repository: `SamyAb-Ed/Evangadi-Forum-Final`
4. Build settings:
   - **Base directory**: `Client`
   - **Build command**: `npm run build`
   - **Publish directory**: `Client/dist`
5. Add environment variable:
   - **Key**: `VITE_API_BASE_URL`
   - **Value**: `https://your-backend-url.railway.app/api` (replace with your backend URL)

### Backend (Railway/Heroku)

1. Deploy the `Server` folder to Railway or Heroku
2. Set up your database (MySQL)
3. Configure environment variables
4. Get the deployed URL and update the frontend's `VITE_API_BASE_URL`

## 🏃‍♂️ Local Development

### Prerequisites

- Node.js 18+
- MySQL database

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   cd Client && npm install
   cd ../Server && npm install
   ```
3. Set up your database and environment variables
4. Start the servers:

   ```bash
   # Terminal 1 - Backend
   cd Server && npm run dev

   # Terminal 2 - Frontend
   cd Client && npm run dev
   ```

## 📁 Project Structure

```
Evangadi-Forum-Final/
├── Client/          # React frontend
├── Server/          # Node.js backend
├── netlify.toml     # Netlify configuration
└── README.md
```

## 🔧 Environment Variables

### Frontend (.env)

```
VITE_API_BASE_URL=http://localhost:5000/api
```

### Backend (.env)

```
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=evangadi_forum
PORT=5000
```

## 🌐 Live Demo

- **Frontend**: [Your Netlify URL]
- **Backend**: [Your Railway/Heroku URL]
