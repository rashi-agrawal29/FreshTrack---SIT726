# FreshTrack – Local Produce Awareness & Food Waste Reduction

FreshTrack is a web application built with **React + Vite** that helps users reduce household food waste while supporting local farmers.  
The platform focuses on **awareness + planning**, allowing users to:  

- 🌱 **Browse local produce** available in their area  
- ✅ **Check availability** of fresh items  
- 🛒 **Add items to Pantry** to track what they own  
- 🍳 **View recipe suggestions** based on pantry items  
- ♻️ **Cook & reduce waste** by using up items before expiry  

---

## 🚀 Tech Stack

- **Frontend:** React + Vite  
- **UI Components:** Material UI / TailwindCSS (depending on setup)  
- **State Management:** React Hooks / Context API  
- **APIs:** Custom backend or third-party food/recipe APIs  
- **Dev Tools:** ESLint, Prettier, GitHub Actions (CI/CD optional)  

---

## 📂 Project Structure

```bash
freshtrack/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components (Home, Pantry, Recipes, etc.)
│   ├── services/       # API calls & services
│   ├── hooks/          # Custom React hooks
│   ├── App.jsx         # Main app entry
│   └── main.jsx        # Vite entry point
├── package.json
├── vite.config.js
├── .gitignore
└── README.md

