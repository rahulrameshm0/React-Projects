# React Projects

A collection of projects I am building while learning React. Each project is a separate React application created with Vite.

## Projects

| Project | Features currently implemented | Status |
| --- | --- | --- |
| [Todo List](./todo/) | Add and delete tasks; move tasks up or down in the list. | Core features implemented |
| [Budget Tracker](./budget-tracker/) | Add expenses with a name, amount, and category; list and delete expenses; calculate the total. | Core features implemented |
| [Blog Post](./blog-post/) | Create posts with a title and content and display them in a list. | Core features implemented |
| [Movies](./movies/) | React and Vite starter with a demo counter. | Project initialized; movie features pending |

## Tech Stack

- React 19
- JavaScript and JSX
- CSS
- Vite 8
- ESLint
- npm

## Run a Project Locally

Install Node.js and npm, then open a terminal in this repository. Choose a project folder and run:

```bash
cd todo
npm install
npm run dev
```

Replace `todo` with `budget-tracker`, `blog-post`, or `movies` to run another project. Open the local URL printed by Vite.

Each project has its own dependencies and scripts. Run commands inside the selected project folder.

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally after building. |
| `npm run lint` | Check the source code with ESLint. |

## Repository Structure

```text
React Projects/
├── README.md
├── todo/
├── budget-tracker/
├── blog-post/
└── movies/
```

## Current Limitations

The todo, budget tracker, and blog applications store their data in React state. Refreshing the page resets that data. They do not currently include a backend or persistent storage.

## Movies Project Progress

- [x] Create the React and Vite project.
- [ ] Implement movie application features.
- [ ] Update this README with the implemented features and any API setup instructions once the movie application is built.

The movies project currently displays the starter page. Its final features and any API requirements will be documented as they are implemented.
