/**
 *
 * @param {HTMLDListElement} element
 */

export const generatorFunctionsComponent = (element) => {
  /* const myGenerator = myFirstGeneratorFunction()

  console.log(myGenerator.next()); */

  const genId = idGenerator();

  const button = document.createElement("button");

  button.innerText = "click me";
  element.appendChild(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

function* idGenerator() {
  let currentId = 0;

  while (true) {
    yield ++currentId;
  }
}

function* myFirstGeneratorFunction() {
  yield "primer valor";
  yield "segundo valor";
  yield "tercer valor";
  yield "cuarto valor";

  return "no hay valores";

  yield "ya no hace nada";
}
