# ⚛️ React Practice Project

A hands-on collection of React practice components covering core React concepts like state management, forms, props, and theming.

---

## 📋 Table of Contents

- [About](#about)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Components](#components)
- [Available Scripts](#available-scripts)
- [License](#license)

---

## About

This project is a practical playground for learning and practicing React fundamentals. Each component in the `src/components` folder focuses on a specific React concept, making it easy to study and experiment with one idea at a time.

---

## Project Structure

```
reactproject/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Counter.jsx         # useState for increment/decrement logic
│   │   ├── NameInput.jsx       # Controlled input with useState
│   │   ├── ProductCard.jsx     # Props and component display
│   │   ├── ProfileForm.jsx     # Form handling with controlled inputs
│   │   ├── ThemeToggle.jsx     # Light/dark theme switching
│   │   └── UserCard.jsx        # Displaying user data via props
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
└── package-lock.json
```

---

## Prerequisites

Make sure you have the following installed before cloning:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

Verify your installations:

```bash
node --version
npm --version
git --version
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/reactproject.git
```

> 🔁 Replace `your-username` with your actual GitHub username or paste the full repo URL.

### 2. Navigate into the Project Directory

```bash
cd reactproject
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will open in your browser at **<http://localhost:5173>** 🎉

> ℹ️ This project uses **Vite** as the build tool, so the dev server runs on port `5173` by default.

---

## Components

| Component | Concept Practiced |
|---|---|
| `Counter.jsx` | `useState` — increment & decrement state |
| `NameInput.jsx` | Controlled inputs with `useState` |
| `ProductCard.jsx` | Passing and displaying data via props |
| `ProfileForm.jsx` | Form handling with controlled components |
| `ThemeToggle.jsx` | Conditional rendering & theme switching |
| `UserCard.jsx` | Component composition with props |

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server (Vite) |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code issues |

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

> 💡 **Tip:** Open each component file individually and experiment by changing props and state values to see how React re-renders the UI.

Happy coding! 🚀
