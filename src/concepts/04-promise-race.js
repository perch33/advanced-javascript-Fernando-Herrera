/**
 *
 * @param {HTMLDivElement} element
 */

export const promiseRaceComponent = (element) => {
  
  element.innerHTML = "Loading..."
  
  const renderValue = (value) => {
    element.innerHTML = value;
  };


  /* race resuelve al mas rápido */
  Promise.race([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
    slowPromise(),
    mediumPromise(),
    fastPromise(),
    slowPromise(),
    mediumPromise(),
    fastPromise(),
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]).then(renderValue);
};

const slowPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast promise");
    }, 1000);
  });
