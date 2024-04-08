/**
 *
 * @param {HTMLDListElement} element
 */

import { heroes } from "../data/heroes";

export const asyncComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb1";

  console.log("inicio de componente");

  findHero(id1)
    .then((hero) => (element.innerHTML = hero))
    .catch((error) => (element.innerHTML = error));

  console.log("fin de componente");
};

/**
 *
 * @param {String} id
 * @returns{Promise<String>}
 */

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw `hero width is ${id} not found`;

  return hero.name;
};
