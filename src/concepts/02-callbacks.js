import { heroes } from "../data/heroes";

export const CallbacksComponent = (element) => {
  const id1 = "5d86371f233c9f2425f16916";
  const id2 = "5d86371f25a058e5b1c8a65e";

  findHero(id1, (error, hero1) => {
    /* element.innerHTML = hero?.name || 'no hay heroe'; */
    if (error) {
      element.innerHTML = error;
      return;
    }
    findHero(id2, (error, hero2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${hero1.name} / ${hero2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {(error:String | Null,hero: Object) => void} callback
 */

const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) {
    callback(`Hero with id ${id} not found`);
    return;
  }
  callback(null, hero);
};
