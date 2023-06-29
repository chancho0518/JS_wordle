// const tag = ["h1", "h2", "h3", "h4", "h5", "h6"];

// for (let i = 0; i < tag.length; i++) {
//   const tagElement = document.createElement(tag[i]);
//   tagElement.innerText = tag[i];
//   boardRow0.appendChild(tagElement);
// }

//const body = document.querySelector("body");
let attemps = 0;
let index = 0;

function appStart() {
  const handleKeyDown = (event) => {
    const key = event.key;
    const keyCode = event.keyCode;

    console.log(key, keyCode);
    const target = document.querySelector("board-row");

    console.log(target);
  };

  window.addEventListener("keydown", handleKeyDown);
}

appStart();
