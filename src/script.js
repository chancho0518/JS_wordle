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
  const handleEnterKeyDown = () => {
    // 정답확인
    console.log("정답확인");
    index = 0;
    attemps += 1;
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(`board-row[data-id="${attemps}"]`)
      .shadowRoot.firstChild.childNodes[index];

    if (index > 0 && event.keyCode === 13) {
      handleEnterKeyDown();
    } else if (index === 5) {
      return;
    } else if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.style.border = "2.5px solid #878A8C";
      thisBlock.innerText = key;
      index += 1;
    }
  };

  window.addEventListener("keydown", handleKeyDown);
}

appStart();
