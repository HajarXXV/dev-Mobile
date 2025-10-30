//Exercice1
// var x = 5
// let y = 10
// const z = 15

// x = 4
// y = 2
// console.log (x, y, z)
// z = 7 //assigne to constant


//Exercice2
// function testScope() {
//   if (true) {
//     var a = "var visible partout";
//     let b = "let visible ici seulement";
//   }
//   console.log(a);
//   console.log(b); // Pourquoi erreur ? -> b is not defined
// }
// testScope();


//Exercice3
// function sayHello(name) {
//   return `Bonjour ${name}`;
// }

// const sayHelloArrow = (name) => `Bonjour ${name}`;

// console.log(sayHello("hiba"))
// console.log(sayHelloArrow("hiba"))  //same comportoment


//Exercice4
// const person = {
//   name: "Sara",
//   sayHello: function () {
//     console.log("Bonjour " + this.name);
//   },
//   sayHelloArrow: () => {
//     console.log("Bonjour " + this.name);
//   },
// };

// person.sayHello();
// person.sayHelloArrow(); //the scope of the the scope where it was created (globale)


//Import / Export de modules (ES6)
// index.js
// import message, { PI, carre } from "./mathUtils.js";

// message(); // 📘 Module mathUtils chargé !
// console.log("PI =", PI);
// console.log("Carré de 5 =", carre(5));


//Tableaux et méthodes modernes
//Exercice 5: Manipulation de base
// const fruits = ["pomme", "banane", "orange"];
// fruits.push("kiwi");
// fruits.pop();
// console.log(fruits);



//Exercice6: map, filter, reduce
// const nums = [1, 2, 3, 4, 5];

// // Multiplie chaque nombre par 2
// console.log(nums.map(n => n * 2));

// // Garde seulement les nombres pairs
// console.log(nums.filter(n => n % 2 === 0));

// // Calcule la somme totale
// console.log(nums.reduce((sum, n) => sum + n, 0));



//Exercice 7:find, some, every
// console.log(nums.find(n => n > 3));
// console.log(nums.some(n => n < 0));
// console.log(nums.every(n => n > 0));



//Objets et déstructuration
//Exercice8
// const user = { id: 1, name: "Ali", city: "Rabat" };

// // Déstructuration
// const { name, city } = user;
// console.log(`${name} habite à ${city}`);

// // Renommage
// const { name: fullName, ...rest } = user;
// console.log(fullName);
// console.log(rest);



//Asynchronisme et Promesses
//Exercice 9: Promise simple
// const p = new Promise((resolve) => {
//   setTimeout(() => resolve("Opération terminée !"), 2000);
// });

// p.then(result => console.log(result));



//Exercice 10: async/await
// async function getUsers() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await res.json();
//     console.log(data);
//   } catch (e) {
//     console.error("Erreur :", e.message);
//   }
// }

// getUsers();



//Fonctions avancées et opérateurs modernes
//Exercice 11 – Template literals
// const name = "Nadia";
// const hour = new Date().getHours();
// console.log(`Bonjour ${name}, il est ${hour}h`);



//Exercice 12 – Spread / Rest
// const arr1 = [1, 2];
// const arr2 = [...arr1, 3, 4];
// console.log(arr2);

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4));


//Exercice 13 – Optional chaining et Nullish coalescing
// const settings = { theme: null };
// console.log(settings.theme ?? "light"); // light

// const user2 = { profile: { email: "x@y.com" } };
// console.log(user2.profile?.email); // x@y.com
// console.log(user2.address?.city);  // undefined


//Gestion des produits
// const produits = [
//   { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
//   { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
//   { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
// ];

// const aujourdHui = new Date();

// const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);
// const total = valides.reduce((s, p) => s + p.prix, 0);

// console.log("Produits valides :", valides);
// console.log("Total :", total, "DH");
