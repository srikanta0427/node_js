📦 Node.js Modules Guide

📌 Introduction

Node.js modules are reusable blocks of code that help you organize your application into smaller, manageable pieces. Every file in Node.js is treated as a module.

---

🔹 Types of Modules

1. Core Modules

Built-in modules provided by Node.js.

Examples:

- "fs" → File System
- "http" → Create server
- "path" → Handle file paths
- "os" → System info

const fs = require('fs');

fs.writeFileSync('file.txt', 'Hello Node.js');

---

2. Local Modules

Custom modules created by you.

📁 math.js

function add(a, b) {
  return a + b;
}

module.exports = add;

📁 app.js

const add = require('./math');

console.log(add(2, 3));

---

3. Third-party Modules

Installed using npm (Node Package Manager).

npm install express

const express = require('express');

---

🔹 Module Export Methods

1. module.exports

Export a single function/object.

module.exports = function () {
  console.log("Hello");
};

---

2. exports

Export multiple values.

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;

---

🔹 Importing Modules

const myModule = require('./myModule');

---

🔹 ES Modules (Modern Way)

Enable ES Modules

Add in package.json:

{
  "type": "module"
}

Export

export const add = (a, b) => a + b;

Import

import { add } from './math.js';

---

🔹 Folder Structure Example

project/
│── app.js
│── math/
│   ├── add.js
│   ├── sub.js
│── utils/
│   ├── logger.js

---

🔹 Why Use Modules?

- Code reusability
- Better organization
- Easy maintenance
- Separation of concerns

---

🔹 Best Practices

- Keep modules small and focused
- Use meaningful file names
- Avoid global variables
- Group related functions together

---

🚀 Conclusion

Modules are the backbone of Node.js applications. Mastering them helps you build scalable and clean backend systems.

---

✨ Happy Coding!
