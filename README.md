# Todo App

A modern, feature-rich todo application built with React and TanStack Query, offering real-time updates, advanced filtering, and a polished user interface.

## ✨ Features

- **Todo Management**
  - Create, read, update, and delete todos
  - Mark todos as complete/incomplete
  - Batch actions support
  - Real-time validation

- **Advanced Filtering**
  - Search by title
  - Filter by status (All/Complete/Incomplete)
  - Sort by creation date
  - Pagination support

- **User Experience**
  - Responsive design for all devices
  - Toast notifications for actions
  - Loading states and error handling
  - Optimistic updates
  - Keyboard shortcuts

## 🛠 Tech Stack

- **Frontend Framework:** React 18
- **State Management:** TanStack Query
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Local Storage:** Dexie.js
- **Build Tool:** Vite

## 🏗 Project Structure

```
src/
├── components/           # UI components
│   ├── todo/            # Todo-specific components
│   │   ├── TodoList     # Todo list container
│   │   ├── TodoItem     # Individual todo item
│   │   └── TodoForm     # Create/edit form
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── pages/               # Page components
├── services/            # API services
└── utils/               # Helper functions
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## 💡 Best Practices

- **Architecture**
  - Component-based structure
  - Single responsibility principle
  - Custom hooks for logic reuse
  - Proper error boundaries

- **Performance**
  - Optimistic updates
  - Proper data caching
  - Lazy loading
  - Debounced search

- **Code Quality**
  - ESLint configuration
  - Consistent code style
  - Type safety
  - Comprehensive error handling

## 🔒 Error Handling

The app implements comprehensive error handling:
- API error handling
- Form validation
- Network error recovery
- Fallback UI components

## 🎨 UI/UX Features

- Responsive design for all screen sizes
- Consistent color scheme
- Accessible components
- Loading states
- Error messages
- Success notifications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👥 Authors

- Initial work - [Your Name]

## 🙏 Acknowledgments

- React Team
- TanStack Query
- Tailwind CSS
- Radix UI