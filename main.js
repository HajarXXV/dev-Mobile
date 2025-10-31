import { PRODUCTS } from "./data/products.js";
import { isExpired } from "./utils/date.js";


PRODUCTS.forEach((p) => console.log(p.name));


const expired = PRODUCTS.filter(p => isExpired(p.expiryDate));
console.log("Produits expirés :", expired); //les elements expirées


const total = PRODUCTS.reduce(
  (somme, p) => somme + p.price * p.quantity,
  0
);
console.log("Valeur totale du stock :", total, "MAD"); //la somme des prix * quantités


const promo = PRODUCTS.filter(p => p.tags.includes("promo")); //juste les elements soldé
console.log("Produits en promo :", promo.map(p => p.name)); //tableau contient juste les noms

const sorted = [...PRODUCTS].sort((a, b) => a.price - b.price); //triés les elements en order croissant
console.log("Tri par prix croissant :", sorted.map(p => p.name)); //tableau contient juste les noms



const delay = (ms) => new Promise(res => setTimeout(res, ms));

const addProduct = async (list, newP) => {
  await delay(300);
  const id = Math.max(...list.map(p => p.id)) + 1; //le max du ids + 1 sera le id du nouveau element
  return [...list, { id, ...newP }]; //à la fin du list il ajoute le nouveau element
};

const newList = await addProduct(PRODUCTS, {
  name: "Savon",
  category: "Hygiène",
  price: 5,
  quantity: 10,
  expiryDate: "2026-01-01",
  tags: ["hygiene"]
});

console.log(newList);
console.log("Après ajout :", newList.length, "produits");

//içi ajoute in produit avec un delay et cree un id basé sur le nombre maximale des ids et retourne 