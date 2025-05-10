- 👉 [ENGLISH](https://github.com/VannsanNin/ImportExport/blob/main/README.md)
- 👉 [KHMER](https://github.com/VannsanNin/ImportExport/blob/main/KHMER.md)

# Understanding Imports and Exports in React JS

Imports and exports are fundamental to modern JavaScript development, particularly in React applications. They allow you to write modular code by breaking it into separate files that can reference each other.

## Basic Import/Export Syntax

### ES Modules (ESM)

React projects typically use ES Modules syntax, which is the modern JavaScript standard for sharing code between files.

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

Default exports are imported without curly braces:

```javascript
import Button from "./Button";
```

## React-Specific Import Patterns

### Importing React

In modern React (17+), you don't need to import React itself for JSX:

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
