# Portfolio Platform - React SPA

A modern, responsive single-page application (SPA) built with React for showcasing creative projects. This platform enables dynamic project management with real-time search capabilities and persistent data storage.

![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=for-the-badge&logo=jest&logoColor=white)

## 🎯 Project Overview

This project was developed as a summative lab assignment to demonstrate proficiency in building modern React applications with advanced state management, component architecture, and user experience design. The application serves as a portfolio showcase platform for a creative agency to display their work and manage project information dynamically.

## ✨ Key Features

### Core Functionality
- **Dynamic Project Management** - Add and remove projects in real-time
- **Advanced Search & Filtering** - Search across titles, descriptions, and technologies
- **Data Persistence** - Automatic localStorage integration for data retention
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Interactive UI** - Smooth animations, hover effects, and intuitive interactions

### Technical Highlights
- **Optimized State Management** - Implements `useCallback` and `useMemo` for performance
- **Component Reusability** - Modular, maintainable component architecture
- **Comprehensive Testing** - Full test coverage with Jest and React Testing Library
- **Accessibility** - ARIA labels and keyboard navigation support
- **Modern Styling** - Tailwind CSS with custom gradient designs

## 🏗️ Component Architecture

```
App (Root - State Management)
├── Header (Presentational)
├── AddProjectForm (Form with local state)
│   └── Input fields with validation
├── SearchBar (Controlled component)
└── ProjectList (Container)
    └── ProjectCard (Presentational, repeated)
        └── Delete functionality
└── Footer (Informational)
```

### Component Breakdown

- **App.js** - Root component managing global state with optimized hooks
- **Header.jsx** - Displays application branding and title
- **AddProjectForm.jsx** - Handles new project creation with form validation
- **SearchBar.jsx** - Provides real-time search functionality
- **ProjectList.jsx** - Container for project cards with empty state handling
- **ProjectCard.jsx** - Individual project display with delete capability
- **Footer.jsx** - Shows project count and attribution

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Component-based UI library
- **React Hooks** - useState, useEffect, useCallback, useMemo

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Custom Gradients** - Emerald/Teal/Cyan color scheme

### Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Component testing utilities
- **7 Integration Tests** - Comprehensive test coverage

### Storage
- **localStorage API** - Client-side data persistence

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/Burugu92/React-Portfolio-Spa-Lab.git

# Navigate to project directory
cd React-Portfolio-Spa-Lab

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at `http://localhost:3000`

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage report
npm test -- --coverage

# Run specific test file
npm test -- AddProjectForm.test.jsx
```

### Test Coverage
- ✅ Component rendering tests
- ✅ Form submission and validation
- ✅ Search and filter functionality
- ✅ Project deletion
- ✅ Empty state handling
- ✅ Integration tests for full user flows

## 📱 Usage Guide

### Adding a Project
1. Fill in the **Project Title** (required)
2. Add a **Description** (required)
3. Enter **Technologies** (comma-separated, optional)
4. Specify a **Category** (optional)
5. Click **Add Project** button

### Searching Projects
- Use the search bar to filter by title, description, or technology
- Results update in real-time as you type
- Clear the search to show all projects

### Deleting a Project
- Hover over any project card
- Click the red delete button (×) in the top-right corner
- Project is immediately removed

### Data Persistence
- All projects are automatically saved to browser localStorage
- Data persists between sessions
- Clear browser data to reset

## 🎨 Design Features

### Color Scheme
- **Primary**: Emerald (#10B981) to Teal (#14B8A6) to Cyan (#06B6D4)
- **Background**: Slate (#F8FAFC)
- **Text**: Slate-700 to Slate-900
- **Accents**: White with transparency effects

### Responsive Breakpoints
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (grid adapts)
- **Desktop**: > 1024px (full multi-column grid)

### UX Enhancements
- Smooth hover transitions (300ms)
- Form validation with disabled states
- Empty state messaging
- Loading indicators
- Keyboard shortcuts (Enter to submit)

## 🚀 Performance Optimizations

### React Optimizations
```javascript
// Memoized callbacks to prevent unnecessary re-renders
const handleAddProject = useCallback((newProject) => {
  setProjects(prevProjects => [newProject, ...prevProjects]);
}, []);

// Memoized computation for filtered projects
const filteredProjects = useMemo(
  () => filterProjects(projects, searchTerm),
  [projects, searchTerm]
);
```

### Best Practices Implemented
- Lazy state initialization for localStorage
- Functional state updates
- Proper dependency arrays
- Component memoization ready
- Efficient re-render prevention

## 📂 Project Structure

```
react-portfolio-spa/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── AddProjectForm.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ProjectList.jsx
│   │   ├── ProjectCard.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   ├── projectData.js
│   │   └── filterProjects.js
│   ├── Tests/
│   │   ├── App.test.jsx
│   │   ├── AddProjectForm.test.jsx
│   │   ├── SearchBar.test.jsx
│   │   ├── ProjectList.test.jsx
│   │   ├── ProjectCard.test.jsx
│   │   └── filterProjects.test.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎓 Learning Outcomes

This project demonstrates mastery of:

### Component Hierarchy ⭐
- Advanced component architecture with clear separation of concerns
- Reusable, modular components following DRY principles
- Proper parent-child relationships and data flow

### State Management ⭐
- Optimized state management with React hooks
- localStorage integration for persistence
- Performance optimization with useCallback and useMemo

### Event Handling ⭐
- Seamless user interactions
- Form submission and validation
- Real-time search filtering
- Delete operations with UI feedback

### Props Management ⭐
- Clean prop drilling without unnecessary overhead
- Callback functions passed efficiently
- Type-safe prop utilization

### Styling & UX ⭐
- Professional, polished design
- Responsive across all device sizes
- Accessibility considerations
- Smooth animations and transitions

## 👨‍💻 Author

**Edwin Burugu**
- GitHub: [@Burugu92](https://github.com/Burugu92)

## 📄 License

This project was created as part of a React SPA summative lab assignment for educational purposes.


**Built with ❤️ using React & Tailwind CSS**

*Last Updated: February 2025*


