# AG Grid Dashboard

A responsive Employee Analytics Dashboard built using **React**, **Vite**, and **AG Grid**. The dashboard provides employee data visualization with filtering, sorting, pagination, CSV export, and summary statistics.

## Features

* Employee Analytics Dashboard
* AG Grid Integration
* Sorting
* Column Filtering
* Floating Filters
* Pagination
* CSV Export
* Responsive Design
* Department, Location, and Status Filters
* Summary Cards
* Clean Dashboard UI

## Tech Stack

* React.js
* Vite
* AG Grid Community
* CSS3

---

## Clone Repository

```bash
git clone https://github.com/yash1404/AG-Grid-Dashboard.git
```

Navigate to the project directory:

```bash
cd AG-Grid-Dashboard
```

---

## Install Dependencies

Using npm:

```bash
npm install
```

---

## Run Development Server

```bash
npm run dev
```

Vite will start the development server.

Open the URL displayed in the terminal, typically:

```bash
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

The production build will be generated inside the `dist` folder.

---

## Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```text
src
│
├── components
│   ├── EmployeeGrid.jsx
│   ├── Filters.jsx
│   └── SummaryCards.jsx
│
├── data
│   └── employees.js
│
├── styles
│   ├── app.css
│   ├── employeeGrid.css
│   ├── filters.css
│   └── summaryCards.css
│
├── App.jsx
└── main.jsx
```

---

## AG Grid Features Implemented

* Client-side Row Model
* Sorting
* Filtering
* Floating Filters
* Pagination
* CSV Export
* Responsive Column Layout
* Custom Cell Rendering
* Row Selection

---

## Scalability Considerations

The dashboard has been designed with scalability in mind:

* Memoized column definitions using `useMemo`
* Memoized row data transformations
* Reusable component structure
* Separation of concerns
* AG Grid client-side rendering optimizations
* Easily extendable for API integration and larger datasets

---

## Dashboard Preview
<img width="1362" height="686" alt="image" src="https://github.com/user-attachments/assets/0458a11a-d81f-44e7-8800-52ed105ffe8b" />



## Author

Yash Singh

GitHub:
https://github.com/yash1404
