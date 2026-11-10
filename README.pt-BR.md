# 📒 Curso JavaScript Cod3r

**Repositório de estudos com meus exercícios de um curso de JavaScript da Cod3r.**

Scripts pequenos escritos enquanto eu acompanhava as aulas, um assunto por arquivo.

🌐 [English](README.md) · **Português**

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📌 Sobre

Este é um repositório de estudos de 2022–2023. Ele guarda os arquivos que escrevi enquanto acompanhava um curso de JavaScript da Cod3r, além das listas de exercícios que resolvi. Não é uma aplicação: cada arquivo é um script curto e independente que imprime o resultado no console. Os nomes de arquivos e variáveis estão em português.

## 🛠 Tecnologias

| Área | Tecnologia |
| --- | --- |
| Linguagem | JavaScript |
| Ambiente de execução | Node.js |
| Bibliotecas usadas nas aulas de Node | `lodash`, `node-schedule`, `axios` |

## 🚀 O que cobre

| Pasta | Assuntos |
| --- | --- |
| `Fundamentos` | Variáveis (`var`, `let`, `const`), tipos, operadores, template strings, destructuring, hoisting |
| `EstruturasDeControle` | `if`/`else`, `switch`, `while`, `do while`, `for`, `for in`, `break` e `continue` |
| `Funcao` | Arrow functions, callbacks, closures, `this` e `bind`, `call`/`apply`, funções factory e construtoras, IIFE |
| `Objetos` | Criação de objetos, getters e setters, herança por protótipo, classes, JSON |
| `Array` | `forEach`, `map`, `filter`, `reduce`, `concat`, `flatMap` |
| `ESnext` | Promises, `async`/`await`, spread e rest, `for of`, `Map`, `Set`, tagged templates |
| `Node` | Sistema de módulos (`require`, `module.exports`), leitura e escrita de arquivos, módulos de terceiros, tarefas agendadas, padrão middleware |
| `Exercicios_Coder1` | Duas listas de exercícios (`exercicio1`, `exercicio2`) e uma pasta de exercícios resolvidos (`Exercicios_resolvidos`) |
| `Exercicios_Independentes` | Cinco exercícios pequenos fora das listas |
| `html` | Dois arquivos sobre a anatomia de uma tag e de uma página; essa parte foi apenas iniciada |

## 📚 O que aprendi

- O básico da linguagem: tipos, escopo, funções e controle de fluxo
- Como o `this` muda conforme a forma de chamar uma função e como closures guardam o contexto
- Trabalhar com objetos, protótipos e classes
- Transformar arrays com `map`, `filter` e `reduce` em vez de laços manuais
- Escrever código assíncrono com callbacks, depois promises, depois `async`/`await`
- Como os módulos do Node são exportados e importados

## ▶ Como rodar o projeto

Requisitos: [Node.js](https://nodejs.org/) e npm.

```bash
git clone https://github.com/G-Delboni/Curso-Javascript-Cod3r.git
cd Curso-Javascript-Cod3r

# only needed for the files that use lodash or node-schedule
npm install

# run any file directly
node Fundamentos/strings.js
```

`Node/funcionarios` tem o próprio `package.json` (rode `npm install` dentro da pasta). Alguns arquivos baixam JSON do servidor do curso e dependem de ele ainda estar no ar.

---

Feito por **Gabriel Delboni Dias** ·
[LinkedIn](https://www.linkedin.com/in/gabriel-delboni-dias/) ·
[GitHub](https://github.com/G-Delboni)
