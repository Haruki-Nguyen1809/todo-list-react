# Todo List

A React practice project: a small to-do app where you can add tasks, mark them as finished, and delete them. Built to practice component composition, state, and passing functions between components.

## Features

- **Add a task** — type into a controlled input and press Add; the new task is appended to the list.
- **Mark as finished** — click a task to toggle it; finished tasks are struck through and dimmed. Click again to undo.
- **Delete a task** — each task has its own Delete button. Clicking it removes only that task and does not toggle it (event propagation is stopped).
- **Dark theme** — colors are managed with CSS variables (`--page-bg`, `--card-bg`, `--text`, `--text-muted`, `--accent`) in `index.css`.

## Project structure

```
src/
├─ main.jsx              — entry point, renders TodoList
├─ index.css             — CSS variables and all styles
├─ TodoList.jsx          — root component, owns the task list state
├─ Input/
│  ├─ Input.jsx          — controlled text input, owns the input value
│  └─ Input.css
├─ Add/
│  └─ Add.jsx            — Add button
└─ DeleteBtn/
   ├─ DeleteBtn.jsx      — Delete button, stops click from bubbling to the task
   └─ DeleteBtn.css
```

## How it works

Each task is an object:

```js
{ id: 1735000000000, text: 'Learn React', finished: false }
```

The list lives in a single `useState` array inside `TodoList`. Every change creates a **new array** instead of mutating the old one:

| Action | Technique |
|---|---|
| Add | spread the old array and append a new object (`id` comes from `Date.now()`) |
| Toggle finished | `map` over the array, copy the matching task with `finished` flipped, keep the others unchanged |
| Delete | `filter` out the task whose `id` matches |

Data flow between components:

- `Input` keeps the text being typed in its own state, and calls the `onAdd` function it receives from `TodoList`, passing the current text.
- `DeleteBtn` receives a handler through props and calls `e.stopPropagation()` before running it, so the click does not also toggle the parent `<li>`.

## React concepts practiced

- Components, JSX, props
- `useState` and controlled inputs
- Passing functions from parent to child (child-to-parent communication)
- Immutable state updates with spread, `map`, and `filter`
- Lists and `key` with `map`
- Conditional `className`
- Event handling and event bubbling (`stopPropagation`)

## Tech stack

- React + Vite
- Plain CSS with CSS variables

## Running the project

```bash
npm install
npm run dev
```
