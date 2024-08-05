# React To-Do List Application

## Overview

This React application provides a simple yet robust interface for managing a to-do list. Users can add, edit, toggle completion, and delete tasks. The application uses React's `useReducer` for state management, enhancing the maintenance and scalability of the app.

## Features

- **Add Tasks:** Users can input tasks via a text input box.
- **Edit Tasks:** Each task can be edited by clicking on the edit button.
- **Delete Tasks:** Tasks can be deleted individually; this option is only enabled for completed tasks.
- **Toggle Task Completion:** Users can mark tasks as complete or incomplete by clicking on a checkbox.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/JunW62/RLAB320H.git
```

2. Install dependencies:

```
npm install
```

3. Start the application:

```
npm run dev
```

## Technologies Used

- React (Create React App)
- JavaScript
- CSS & HTML

## File Structure

- `src/`: Source files for the application.
- `components/`: React components.
- `reducers/`: Reducer functions for state management.
- `App.js`: Main React component.
- `index.js`: Entry point for the React application.
- `public/`: Public files, including `index.html`.
