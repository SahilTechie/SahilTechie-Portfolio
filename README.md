# 🚀 Sahil Mallelwar | Portfolio Website


## 📌 Overview

Welcome to my **personal portfolio website** - a modern, responsive showcase of my journey as a **MERN Stack Developer & Business Development Enthusiast**. This project demonstrates my technical skills, professional experience, and passion for creating innovative web solutions.

Currently pursuing **Bachelor of Technology (B.Tech) in Computer Science and Business Systems** at **Gitam University, Vizag**, I'm dedicated to bridging the gap between technology and business growth.

## 🌐 Live Demo

👉 **[View Live Portfolio](https://57pd2j-5173.csb.app/)**

## ✨ Key Features

### 🎨 Design & User Experience
- **Fully Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- **Smooth Animations** - Custom CSS animations and hover effects
- **Modern UI/UX** - Clean, professional design with intuitive navigation
- **Accessibility** - WCAG compliant with keyboard navigation support

### 📱 Sections & Functionality
- **🏠 Hero Section** - Dynamic introduction with animated background
- **👨‍💻 About** - Professional background and personal story
- **💼 Experience** - Career timeline and achievements
- **🛠️ Skills** - Technical proficiencies with visual representations
- **🚀 Projects** - Portfolio showcasing real-world applications
- **📞 Contact** - Interactive contact form with EmailJS integration
- **📄 Resume Download** - Direct PDF download functionality

### 🔧 Technical Features
- **Single Page Application (SPA)** - Smooth client-side routing
- **Component-Based Architecture** - Modular and maintainable React components
- **Performance Optimized** - Lazy loading and code splitting
- **SEO Friendly** - Meta tags and semantic HTML structure
- **Cross-Browser Compatible** - Tested across modern browsers

## 🛠️ Technology Stack

### Frontend Framework
- **⚛️ React 18.3.1** - Modern React with Hooks and Context API
- **📘 TypeScript 5.5.3** - Type-safe JavaScript for better development experience
- **⚡ Vite 6.3.5** - Fast build tool and development server

### Styling & UI
- **🎨 Tailwind CSS 3.4.1** - Utility-first CSS framework
- **🎭 Custom CSS Animations** - Smooth transitions and micro-interactions
- **🎨 PostCSS & Autoprefixer** - CSS processing and vendor prefixes

### Development Tools
- **📦 npm** - Package manager
- **🔍 ESLint 9.9.1** - Code linting and formatting
- **🔧 TypeScript ESLint** - TypeScript-specific linting rules
- **🏗️ Vite Plugin React** - Hot module replacement and fast refresh

### External Services
- **📧 EmailJS** - Contact form email functionality
- **🎨 Lucide React** - Modern icon library
- **🌐 GitHub Pages / CodeSandbox** - Hosting and deployment

### Development Environment
- **💻 VS Code** - Primary code editor
- **🔄 Git & GitHub** - Version control and repository hosting
- **🎨 Canva** - Graphics and design assets
- **📱 Responsive Design Testing** - Cross-device compatibility

## 📁 Project Structure

```
SahilTechie-Portfolio/
├── 📁 public/                    # Static assets
│   ├── 🖼️ image.jpg             # Profile picture
│   ├── 📄 Sahil-Mallelwar-Resume.pdf
│   ├── 🖼️ Dev.png               # Project screenshots
│   ├── 🖼️ Discord.png
│   └── 🖼️ SmartWebBot.png
├── 📁 src/                       # Source code
│   ├── 📁 components/            # React components
│   │   ├── ⚛️ About.tsx         # About section
│   │   ├── ⚛️ Contact.tsx       # Contact form
│   │   ├── ⚛️ Experience.tsx    # Experience timeline
│   │   ├── ⚛️ Footer.tsx        # Footer component
│   │   ├── ⚛️ Hero.tsx          # Hero/Landing section
│   │   ├── ⚛️ Navigation.tsx    # Header navigation
│   │   ├── ⚛️ Projects.tsx      # Projects showcase
│   │   └── ⚛️ Skills.tsx        # Skills section
│   ├── 📁 contexts/              # React contexts
│   │   └── ⚛️ ThemeContext.tsx  # Theme management
│   ├── ⚛️ App.tsx               # Main app component
│   ├── 🎨 index.css             # Global styles
│   ├── ⚛️ main.tsx              # App entry point
│   └── 📘 vite-env.d.ts         # Vite type definitions
├── ⚙️ eslint.config.js           # ESLint configuration
├── 🌐 index.html                # HTML template
├── 📦 package.json              # Dependencies and scripts
├── 🎨 postcss.config.js         # PostCSS configuration
├── 🎨 tailwind.config.js        # Tailwind CSS configuration
├── 📘 tsconfig.json             # TypeScript configuration
├── 📘 tsconfig.app.json
├── 📘 tsconfig.node.json
└── ⚡ vite.config.ts            # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SahilTechie/SahilTechie-Portfolio.git
   cd SahilTechie-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

6. **Lint code**
   ```bash
   npm run lint
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for EmailJS configuration:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization
- **Personal Information**: Update `src/components/Hero.tsx` and `src/components/About.tsx`
- **Projects**: Modify `src/components/Projects.tsx` with your project details
- **Skills**: Update `src/components/Skills.tsx` with your technical skills
- **Experience**: Edit `src/components/Experience.tsx` with your work history
- **Styling**: Customize colors and themes in `tailwind.config.js`

## 📱 Responsive Design Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🎨 Color Palette

```css
/* Primary Colors */
--blue-600: #2563eb
--purple-600: #9333ea
--green-500: #10b981
--teal-600: #0d9488

/* Background */
--gray-50: #f9fafb
--gray-900: #111827

/* Text */
--gray-900: #111827
--gray-600: #4b5563
--white: #ffffff
```


## 🔗 Useful Links

- **📧 Email**: [smallelw@gitam.in](mailto:smallelw@gitam.in)
- **💼 LinkedIn**: [Sahil Mallelwar](https://www.linkedin.com/in/sahil-mallelwar-439082325)
- **🐱 GitHub**: [SahilTechie](https://github.com/SahilTechie)
- **🎓 University**: [Gitam University, Vizag](https://www.gitam.edu/)
- **📱 Portfolio**: [Live Demo](https://57pd2j-5173.csb.app/)

## 📚 Learning Resources

If you're interested in building a similar portfolio, here are some helpful resources:

- **React Documentation**: [reactjs.org](https://reactjs.org)
- **TypeScript Handbook**: [typescriptlang.org](https://www.typescriptlang.org)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Vite Guide**: [vitejs.dev](https://vitejs.dev)

## 🎯 Future Enhancements

- [ ] Blog integration
- [ ] Multilingual support
- [ ] Advanced animations with Framer Motion
- [ ] Project filtering and search
- [ ] Testimonials section
- [ ] Skills assessment integration
- [ ] PWA (Progressive Web App) features
- [ ] Advanced SEO optimizations

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Sahil Mallelwar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

Special thanks to:

- **React Team** - For the amazing framework that powers this portfolio
- **Tailwind CSS Team** - For the utility-first CSS framework
- **Vite Team** - For the lightning-fast build tool
- **Lucide Icons** - For the beautiful and consistent icon set
- **EmailJS** - For seamless contact form functionality
- **Open Source Community** - For the countless libraries and tools
- **Gitam University** - For the educational foundation
- **Mentors & Peers** - For guidance and feedback

## 👥 Connect With Me

I'm always excited to connect with fellow developers, potential collaborators, and anyone interested in technology and business development.

- 💬 **Let's Chat**: Open to discussions about web development, business strategies, and innovative projects
- 🤝 **Collaboration**: Interested in working together on exciting projects
- 📈 **Mentorship**: Happy to share knowledge with aspiring developers
- 🌱 **Learning**: Always eager to learn from others and explore new technologies

---

<div align="center">

**Made with ❤️ by [Sahil Mallelwar](https://github.com/SahilTechie)**

*Building the future, one line of code at a time*

⭐ Star this repository if you found it helpful!

[![GitHub followers](https://img.shields.io/github/followers/SahilTechie?style=social)](https://github.com/SahilTechie)
[![LinkedIn](https://img.shields.io/badge/-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/sahil-mallelwar-439082325)

</div>

