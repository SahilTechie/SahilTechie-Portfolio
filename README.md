# 🚀 Sahil Mallelwar | Portfolio Website

## 📌 Overview
This is my **personal portfolio website**, showcasing my skills, projects, and professional experience as a **MERN Stack Developer & Business Development Enthusiast**.  
It is designed to highlight my expertise, demonstrate my work, and provide ways to connect with me.

## 🚀 Deployment
This portfolio is deployed using **Render**:  
👉 [Live Demo](https://57pd2j-5173.csb.app/) _(Update with your Render URL after deployment)_

## 🌟 Features
✅ Fully responsive design (mobile-friendly)  
✅ Modern UI with smooth animations  
✅ Sections: Home, About, Projects, Skills, Experience, Contact  
✅ Integrated social links and resume download  
✅ Hosted on **Render** for fast and reliable deployment  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Version Control:** Git & GitHub
- **Hosting:** Render
- **Other Tools:** VS Code, EmailJS (for contact form)

## 📦 How to Run Locally

Follow these steps to run the project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/SahilTechie/SahilTechie-Portfolio.git
cd SahilTechie-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

## 🚀 Deploy to Render

### Method 1: Using Render Dashboard (Recommended)
1. **Create a Render Account**: Go to [render.com](https://render.com) and sign up
2. **Connect GitHub**: Link your GitHub account to Render
3. **Create New Static Site**: 
   - Click "New" → "Static Site"
   - Select your repository: `SahilTechie-Portfolio`
   - Configure the build settings:
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`
4. **Deploy**: Click "Create Static Site"

### Method 2: Using Render Blueprint (render.yaml)
This project includes a `render.yaml` file for easy deployment:

1. **Fork this repository** to your GitHub account
2. **Go to Render Dashboard** and click "New" → "Blueprint"
3. **Connect your GitHub** and select this repository
4. **Deploy**: Render will automatically use the `render.yaml` configuration

### Build Configuration
The project is configured with the following build settings:
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18+ (automatically detected)

## 📁 Project Structure
```
SahilTechie-Portfolio/
├── public/
│   ├── _redirects           # SPA routing for Render
│   └── assets/             # Static assets
├── src/
│   ├── components/         # React components
│   ├── contexts/          # React contexts
│   └── main.tsx           # Application entry point
├── render.yaml            # Render deployment config
├── package.json
└── vite.config.ts         # Vite configuration
```

## 🔧 Environment Variables
If your project uses environment variables, create them in Render:
1. Go to your service dashboard
2. Navigate to "Environment" tab
3. Add your variables (e.g., `VITE_EMAILJS_SERVICE_ID`)

## 📝 Notes
- The site automatically handles SPA routing with the `_redirects` file
- All assets are optimized during the build process
- The project uses Vite for fast builds and hot module replacement

