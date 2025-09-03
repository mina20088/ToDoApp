# 📋 ToDoApp

> **Stay organized and get things done**

A modern, responsive Todo application built with Vue 3, Vite, and FontAwesome icons. This application provides an intuitive interface for managing daily tasks and staying productive.

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![FontAwesome](https://img.shields.io/badge/FontAwesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=pinia&logoColor=black)

## ✨ Features

- **Modern Vue 3 Composition API** - Built with the latest Vue.js features
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Beautiful UI** - Clean, modern interface with gradient styling
- **Icon Integration** - FontAwesome icons for enhanced user experience
- **State Management** - Pinia for efficient state management
- **Routing Ready** - Vue Router integration for scalable navigation
- **Development Tools** - Hot reload, ESLint, and Prettier for optimal DX

## 🏗️ Project Structure

```
ToDoApp/
├── public/
│   └── favicon.ico                 # Application favicon
├── src/
│   ├── assets/
│   │   ├── fonts.css              # Font declarations
│   │   ├── main.css               # Global styles
│   │   └── fonts/
│   │       └── Montserrat/        # Montserrat font family
│   ├── components/
│   │   └── BaseCard.vue           # Reusable card component
│   ├── router/
│   │   └── index.js               # Vue Router configuration
│   ├── stores/                    # Pinia stores directory
│   ├── App.vue                    # Root component
│   └── main.js                    # Application entry point
├── eslint.config.js               # ESLint configuration
├── jsconfig.json                  # JavaScript configuration
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation
└── vite.config.js                # Vite configuration
```

## 🚀 Tech Stack

### Core Technologies

- **[Vue.js 3](https://vuejs.org/)** - Progressive JavaScript framework
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Pinia](https://pinia.vuejs.org/)** - State management for Vue.js
- **[Vue Router](https://router.vuejs.org/)** - Official router for Vue.js

### UI & Icons

- **[FontAwesome](https://fontawesome.com/)** - Comprehensive icon library
- **Montserrat Font** - Modern, professional typography
- **CSS3** - Modern styling with gradients and responsive design

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and quality assurance
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vite DevTools](https://github.com/webfansplz/vite-plugin-vue-devtools)** - Enhanced development experience

## 📦 Installation

### Prerequisites

- **Node.js**: ^20.19.0 || >=22.12.0
- **npm** or **yarn** package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ToDoApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot-reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Lint and auto-fix code issues            |
| `npm run format`  | Format code with Prettier                |

## 🎨 Component Architecture

### BaseCard Component

The main UI component featuring:

- **Gradient Header** - Beautiful blue gradient background
- **Icon Integration** - FontAwesome check circle icon
- **Responsive Design** - Mobile-first approach
- **Slot System** - Flexible content insertion

```vue
<BaseCard>
  <!-- Your todo content goes here -->
</BaseCard>
```

## 🔧 Configuration

### Vite Configuration

- Vue plugin integration
- Vue DevTools for development
- Modern build optimizations

### ESLint & Prettier

- Vue.js specific rules
- Prettier integration for consistent formatting
- Modern JavaScript standards

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel** - Zero-configuration deployment
- **Netlify** - Continuous deployment from Git
- **GitHub Pages** - Free static hosting
- **Firebase Hosting** - Google's hosting platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow Vue.js style guide
- Use Composition API for new components
- Maintain responsive design principles
- Ensure proper ESLint compliance
- Write meaningful commit messages

## 🔮 Future Enhancements

- [ ] Task CRUD operations
- [ ] Local storage persistence
- [ ] Task categories and filters
- [ ] Due date functionality
- [ ] Dark/Light theme toggle
- [ ] Task priority levels
- [ ] Export/Import functionality

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

If you have any questions or need help with setup, please feel free to open an issue or reach out to the maintainers.

---

**Built with ❤️ using Vue.js and modern web technologies**
