# Modern Landing Page

A responsive, modern landing page built with React and Tailwind CSS. This project features a sleek design with a fully responsive navigation system and optimized performance.

## 🚀 Features

-   Responsive design that works on all devices
-   Modern and clean UI
-   Animated mobile navigation
-   Optimized for performance
-   Accessible navigation system
-   Smooth scroll animations
-   Dark theme design

## 🛠️ Technologies Used

-   React 18
-   Tailwind CSS
-   React Hooks
-   Modern JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/sumitdoescode/loopstudios-landingpage
```

2. Navigate to the project directory:

```bash
cd landing-page
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## 🏗️ Project Structure

```
landing-page/
├── public/
│   ├── logo/
│   │   └── logo.svg
│   └── icons/
│       ├── icon-hamburger.svg
│       └── icon-close.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   └── index.jsx
└── README.md
```

## 🎨 Component Documentation

### Navbar Component

The navigation component (`Navbar.jsx`) includes:

-   Desktop and mobile-responsive design
-   Animated mobile menu
-   Custom hamburger and close icons
-   Scroll lock functionality when mobile menu is open
-   Centered navigation items in mobile view
-   Logo display in both desktop and mobile views

Usage:

```jsx
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            {/* Other components */}
        </div>
    );
}
```

## 🔧 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying the Tailwind configuration in `tailwind.config.js`
2. Adding custom CSS in your component files
3. Updating the color scheme in the Tailwind theme

### Navigation Links

To modify navigation links, update the `navLinks` array in `Navbar.jsx`:

```jsx
const navLinks = [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    // Add more links as needed
];
```

## 📱 Responsive Breakpoints

-   Mobile: < 768px
-   Desktop: ≥ 768px

## 🌟 Best Practices

-   Keep image sizes optimized
-   Use semantic HTML elements
-   Follow React best practices and hooks guidelines
-   Maintain accessibility standards
-   Test across different devices and browsers

## 📫 Contact

Your Name - sumit.does.code@gmail.com
