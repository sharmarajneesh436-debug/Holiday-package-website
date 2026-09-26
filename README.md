# React + Vite
# Holiday Package Website

A modern and responsive travel website built with **React.js and Vite**. The website allows users to explore holiday packages, view detailed package information, and submit travel inquiries through a contact form.

## 🌍 Overview

The Holiday Package Website is designed to provide a clean, engaging, and user-friendly travel browsing experience.

Users can:

* Explore featured holiday destinations
* Learn more about the travel company
* View package details through interactive modal popups
* Explore destinations, recommended places, and hotels
* Submit an inquiry through the contact form
* Navigate smoothly between different sections
* Use the website comfortably across desktop, tablet, and mobile devices

## ✨ Features

### 🧭 Navigation

* Responsive navigation bar
* Smooth scrolling between sections
* Active navigation link highlighting
* Quick access to the contact section

### 🏝️ Hero Section

* Full-width travel background
* Engaging headline and description
* Clear **Explore Packages** call-to-action

### ℹ️ About Section

* Brief company introduction
* Travel service highlights
* Supporting destination imagery

### 🧳 Holiday Packages

Currently featured destinations:

* **Bali** — 5 Days / 4 Nights
* **Paris** — 6 Days / 5 Nights
* **Switzerland** — 7 Days / 6 Nights

Each package includes:

* Destination image
* Duration
* Starting price
* Short description
* Places to visit
* Recommended hotels
* Interactive details modal

### 🔍 Package Details Modal

* Glassmorphism-style popup
* Destination-specific image
* Detailed package information
* Places to visit
* Recommended hotels
* Responsive design
* Scrollable content for smaller screens

### 📩 Contact Section

* Name field
* Email field
* Message field
* Basic form validation
* Submission success message
* Responsive contact layout

### 🦶 Footer

* Company information
* Quick navigation links
* Contact information
* Copyright information

## 🛠️ Tech Stack

* **React.js**
* **Vite**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Git & GitHub**

## 📁 Project Structure

```text
holiday-website/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Packages.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sharmarajneesh436-debug/Holiday-package-website.git
```

### 2. Navigate to the project

```bash
cd Holiday-package-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📱 Responsive Design

The website has been designed and tested across:

* Desktop
* Laptop
* Tablet
* Mobile phones
* Foldable/mobile-width screens

Responsive layouts are implemented using CSS media queries and flexible grid/flex layouts.

## 🎯 Project Goals

The project focuses on:

* Clean and maintainable React component structure
* Responsive user interface design
* Simple and intuitive navigation
* Interactive user experience
* Reusable package data and components
* Modern visual design
* Practical frontend functionality

## 🔮 Future Improvements

Potential future enhancements include:

* Backend integration for contact inquiries
* Database integration for packages
* User authentication
* Online booking functionality
* Payment integration
* Package filtering and search
* Destination reviews and ratings
* Admin dashboard for managing packages

## 👨‍💻 Author

**Rajneesh Sharma**

B.Tech Computer Science & Engineering

---

© 2026 Holiday Package Website. All rights reserved.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
