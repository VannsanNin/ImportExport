# Understanding Imports and Exports in React JS

Imports និង exports(នាំចូលនិង នាំចេញ) ជាមុខងាគ្រឹសមួយដែលមានការប្រើប្រាស់ក្នុង JavaScript ជំនាន់ថ្មីៗ និងពេញនិយមក្នុង React Application យើនឹងលម្អិតនៅខាងក្រោម:

## Basic Import/Export Syntax

### ES Modules (ESM)

React projects ជាធម្មតាយើងប្រើ ES Modules syntax ដែល modern JavaScript ស្តង់ដារមួយសម្រាប់ចែករំលែកដូដាច់ដោយឡែកពីមួយផ្នែកៗផ្សេងៗគ្នា។

### Named Exports

```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

These can be imported using:

```javascript
import { add, subtract } from "./math";
```

### Default Exports

```javascript
// Button.jsx
const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
```

Default exports យើង imported ដោយមិនប្រើ curly braces {}:

```javascript
import Button from "./Button";
```

## React-Specific Import Patterns

### Importing React

ក្នុង modern React (17+) អ្នកមិនចាំបាច់ import React សម្រាប់ JSX ទេ:

```javascript
// Old way (pre-React 17)
import React from "react";

// Modern way - only needed when using React features directly
import { useState, useEffect } from "react";
```

### Importing Components

```javascript
import Header from "./components/Header";
import { Footer, Sidebar } from "./components/layout";
```

### Importing Assets

```javascript
import logo from "./assets/logo.svg";
import "./styles/main.css";
```

## Advanced Patterns

### Re-exporting

```javascript
// components/index.js
export { default as Button } from "./Button";
export { default as Card } from "./Card";
```

This enables:

```javascript
import { Button, Card } from "./components";
```

### Import Aliases

```javascript
import { add as addition } from "./math";
```

### Dynamic Imports

```javascript
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```
