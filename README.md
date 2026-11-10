# 📒 Curso JavaScript Cod3r

**Study repository with my exercises from a Cod3r JavaScript course.**

Small scripts written while following the lessons, one topic per file.

🌐 **English** · [Português](README.pt-BR.md)

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📌 About

This is a study repository from 2022–2023. It holds the files I wrote while following a JavaScript course by Cod3r, plus the exercise lists I solved. It is not an application: each file is a short, independent script that prints its result to the console. File and variable names are in Portuguese.

## 🛠 Technologies

| Area | Technology |
| --- | --- |
| Language | JavaScript |
| Runtime | Node.js |
| Libraries used in the Node lessons | `lodash`, `node-schedule`, `axios` |

## 🚀 What it covers

| Folder | Topics |
| --- | --- |
| `Fundamentos` | Variables (`var`, `let`, `const`), types, operators, template strings, destructuring, hoisting |
| `EstruturasDeControle` | `if`/`else`, `switch`, `while`, `do while`, `for`, `for in`, `break` and `continue` |
| `Funcao` | Arrow functions, callbacks, closures, `this` and `bind`, `call`/`apply`, factory and constructor functions, IIFE |
| `Objetos` | Object creation, getters and setters, prototype inheritance, classes, JSON |
| `Array` | `forEach`, `map`, `filter`, `reduce`, `concat`, `flatMap` |
| `ESnext` | Promises, `async`/`await`, spread and rest, `for of`, `Map`, `Set`, tagged templates |
| `Node` | Module system (`require`, `module.exports`), reading and writing files, third-party modules, scheduled tasks, middleware pattern |
| `Exercicios_Coder1` | Two exercise lists (`exercicio1`, `exercicio2`) and a folder of solved exercises (`Exercicios_resolvidos`) |
| `Exercicios_Independentes` | Five small exercises outside the lists |
| `html` | Two files on the anatomy of a tag and of a page; this part was only started |

## 📚 What I learned

- The basics of the language: types, scope, functions and control flow
- How `this` changes with the way a function is called, and how closures keep their context
- Working with objects, prototypes and classes
- Transforming arrays with `map`, `filter` and `reduce` instead of manual loops
- Writing asynchronous code with callbacks, then promises, then `async`/`await`
- How Node modules are exported and imported

## ▶ Running the project

Requirements: [Node.js](https://nodejs.org/) and npm.

```bash
git clone https://github.com/G-Delboni/Curso-Javascript-Cod3r.git
cd Curso-Javascript-Cod3r

# only needed for the files that use lodash or node-schedule
npm install

# run any file directly
node Fundamentos/strings.js
```

`Node/funcionarios` has its own `package.json` (run `npm install` inside it). A few files download JSON from the course's server and depend on it still being online.

---

Built by **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias/) ·
[GitHub](https://github.com/G-Delboni)
