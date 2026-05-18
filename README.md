# 🤖 Sentiment AI Frontend

A modern React + Tailwind CSS frontend for a Sentiment Analysis AI project.  
Users can type text or use voice input, then the app sends the text to the Flask backend and displays the sentiment result.

---

## 🚀 Features

- Modern React frontend
- Tailwind CSS styling
- Dark theme UI
- Glassmorphism design
- Sentiment input box
- Voice input support
- AI loading animation
- Emoji result display
- Mobile responsive design
- Connected with Flask backend API
- Ready for Netlify deployment

---

## 🛠️ Tech Stack

- React.js
- Vite
- Tailwind CSS
- JavaScript
- Flask API Backend

---

## 📁 Folder Structure

```text
sentiment-ai-frontend/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   └── SentimentBox.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sentiment-ai-frontend.git
```

```bash
cd sentiment-ai-frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

## ▶️ Run Locally

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## 🔗 Backend API Connection

In `src/components/SentimentBox.jsx`, update the API URL:

```javascript
const response = await fetch(
  "https://your-backend-url.onrender.com/predict",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: text,
    }),
  }
);
```

For local backend testing, use:

```javascript
http://127.0.0.1:5000/predict
```

For deployed backend, use your Render URL:

```javascript
https://your-backend-url.onrender.com/predict
```

---

## 🧪 How It Works

1. User types text in the textarea.
2. User clicks **Analyze**.
3. React sends the text to Flask backend.
4. Flask backend predicts sentiment.
5. Frontend displays the result.

Example:

```text
Input: I love this movie
Output: Positive 😊
```

---

## 🎤 Voice Input

This app supports browser voice input using Speech Recognition.

Click:

```text
Voice 🎤
```

Then speak your sentence.  
The spoken text will appear in the textarea.

---

## 🧠 Sentiment Result

The app displays:

```text
Positive 😊
```

or

```text
Negative 😢
```

based on backend response.

---

## 📱 Responsive Design

The frontend is mobile responsive and works on:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🚀 Build for Production

```bash
npm run build
```

Production files will be created inside:

```text
dist/
```

---

## 🌐 Deploy on Netlify

### Build Command

```bash
npm run build
```

### Publish Directory

```text
dist
```

After deployment, Netlify will provide a live URL like:

```text
https://sentiment-ai-frontend.netlify.app
```

---

## 🙅‍♀️ Do Not Push These Files

Add this in `.gitignore`:

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules/

# Build files
dist/
dist-ssr/

# Environment files
.env
.env.local
*.local

# Editor files
.vscode/*
!.vscode/extensions.json

.idea/

# System files
.DS_Store
Thumbs.db

# Visual Studio
*.suo
*.ntvs*
*.njsproj
*.sln

# Swap files
*.sw?
```

---

## 📌 Available Scripts

### Run development server

```bash
npm run dev
```

### Create production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 👩‍💻 Author

**Sathya**

---

## ⭐ Project Status

✅ Frontend completed  
✅ Backend API connected  
✅ Voice input added  
✅ Modern UI completed  
✅ Ready for Netlify deployment

---

## 📌 License

This project is free to use for learning and portfolio purposes.
