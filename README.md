# Plannix - To Do List Application

A simple yet elegant task management application built with vanilla HTML, CSS, and JavaScript. Plannix helps you organize your daily tasks with a clean, dark-themed interface.

## Features

✅ **Add Tasks** - Quickly add tasks using the input field and "Add" button or press Enter  
✅ **Mark Complete** - Check off tasks as you complete them with visual strike-through effect  
✅ **Delete Tasks** - Remove tasks with a single click  
✅ **Persistent Storage** - Tasks are saved to browser's localStorage and persist across sessions  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  
✅ **Dark Theme** - Modern dark mode interface with gradient background  
✅ **Smooth Interactions** - Intuitive UI with hover effects and transitions  

## Project Structure

```
.
├── index.html      # HTML markup and page structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript functionality and logic
└── README.md       # Project documentation
```

### File Descriptions

**index.html**
- Semantic HTML5 structure
- Input field for task entry
- Task list container
- Links to external Google Fonts (Fira Sans) and local CSS/JS files

**script.js**
- `addTask()` - Creates and adds new task elements
- `handleKey()` - Listens for Enter key to submit tasks
- `removeTask()` - Deletes tasks from the list
- `toggleDone()` - Marks tasks as complete/incomplete
- `saveTasks()` - Saves tasks to localStorage in JSON format
- `loadTasks()` - Retrieves and displays saved tasks on page load

**style.css**
- Dark theme with gradient background (#232526 to #414345)
- Green accent color (#10b981) for interactive elements
- Custom scrollbar styling
- Mobile-responsive layout with media queries
- Smooth transitions and hover effects
- Typography: Fira Sans font family

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, gradients, media queries, custom scrollbars
- **JavaScript (ES6+)** - DOM manipulation, localStorage API
- **Google Fonts** - Fira Sans font family

## Color Scheme

- **Primary Background** - Gradient (#232526 to #414345)
- **Container** - #1c1c1c
- **Text** - #e2e8f0
- **Accent** - #10b981 (Green)
- **Input** - #111111
- **Task Items** - #2a2a2a
- **Delete Button** - #f87171 (Red)

## How to Use

1. **Open** the `index.html` file in a web browser
2. **Type** a task in the input field
3. **Click** "Add" button or press **Enter** to add the task
4. **Check** the checkbox to mark tasks as complete
5. **Click** the **×** button to delete tasks
6. Tasks are automatically saved and will persist when you reload the page

## Browser Compatibility

- Chrome/Chromium (Full support)
- Firefox (Full support)
- Safari (Full support)
- Edge (Full support)

## Features Breakdown

### Task Addition
- Type text in the input field
- Submit via "Add" button or Enter key
- Input is trimmed and validated (empty tasks are rejected)
- Input field clears after successful task addition

### Task Management
- **Checkbox** - Marks task as done with visual styling
- **Text** - Displays task name with word-break support
- **Delete Button** - Removes task from list instantly

### Storage System
- Uses browser's `localStorage` API
- Stores task data as JSON: `{ text: string, done: boolean }`
- Automatically loads tasks when page opens
- Saves after every action (add, delete, toggle)

### Responsive Design
- Desktop: Multi-column layout optimized for larger screens
- Mobile (< 400px): Single column layout with stacked input
- Max container width: 500px on desktop
- Viewport-aware with meta tags for mobile optimization

## Data Structure

Tasks are stored in localStorage as JSON array:
```json
[
  { "text": "Learn JavaScript", "done": false },
  { "text": "Build a project", "done": true }
]
```

## Future Enhancement Ideas

- Task categories/tags
- Due dates
- Priority levels
- Search/filter functionality
- Dark/Light theme toggle
- Task editing capability
- Local backup/export options
- Drag-and-drop reordering


