let keyBoard = [];
let keyPad = [];
let keyPadSpan = [];
let keyPadChar = [];
let keyCharactor = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
const footer = document.createElement("footer");

body.appendChild(footer);

footer.style.marginTop = "30px";
footer.style.marginBottom = "30px";

for (let i = 0; i < 3; i++) {
  keyBoard[i] = document.createElement("div");

  const keyBoardStyle = keyBoard[i].style;
  keyBoardStyle.display = "flex";
  keyBoardStyle.gap = "10px";
  keyBoardStyle.marginTop = "15px";
  keyBoardStyle.justifyContent = "center";
  keyBoardStyle.alignItems = "center";

  footer.appendChild(keyBoard[i]);
}

for (let i = 0; i < keyCharactor[0].length; i++) {
  keyPad[i] = document.createElement("div");
  keyPad[i].innerText = keyCharactor[0][i];
  keyPad[i].dataset.key = keyCharactor[0][i];

  const keyPadStyle = keyPad[i].style;
  keyPadStyle.display = "flex";
  keyPadStyle.width = "50px";
  keyPadStyle.height = "75px";
  keyPadStyle.borderRadius = "5px";
  keyPadStyle.backgroundColor = "#d3d6da";
  keyPadStyle.fontSize = "30px";
  keyPadStyle.fontWeight = "bold";
  keyPadStyle.justifyContent = "center";
  keyPadStyle.alignItems = "center";
  keyPadStyle.cursor = "pointer";

  keyBoard[0].appendChild(keyPad[i]);
}

for (let i = 0; i < keyCharactor[1].length; i++) {
  const setNum = keyCharactor[0].length;

  keyPad[i + setNum] = document.createElement("div");
  keyPad[i + setNum].innerText = keyCharactor[1][i];
  keyPad[i + setNum].dataset.key = keyCharactor[1][i];

  const keyPadStyle = keyPad[i + setNum].style;
  keyPadStyle.display = "flex";
  keyPadStyle.width = "50px";
  keyPadStyle.height = "75px";
  keyPadStyle.borderRadius = "5px";
  keyPadStyle.backgroundColor = "#d3d6da";
  keyPadStyle.fontSize = "30px";
  keyPadStyle.fontWeight = "bold";
  keyPadStyle.justifyContent = "center";
  keyPadStyle.alignItems = "center";
  keyPadStyle.cursor = "pointer";

  keyBoard[1].appendChild(keyPad[i + setNum]);
}

for (let i = 0; i < keyCharactor[2].length + 2; i++) {
  const setNum = keyCharactor[0].length + keyCharactor[1].length;

  keyPad[i + setNum] = document.createElement("div");

  const keyPadStyle = keyPad[i + setNum].style;
  keyPadStyle.display = "flex";
  keyPadStyle.height = "75px";
  keyPadStyle.borderRadius = "5px";
  keyPadStyle.backgroundColor = "#d3d6da";
  keyPadStyle.justifyContent = "center";
  keyPadStyle.alignItems = "center";
  keyPadStyle.cursor = "pointer";

  if (i === 0) {
    keyPad[i + setNum].innerText = "ENTER";
    keyPadStyle.width = "80px";
    keyPadStyle.fontSize = "18px";
    keyPadStyle.fontWeight = "bold";
  } else if (i === keyCharactor[2].length + 1) {
    const backSpace = document.createElement("img");
    backSpace.src = "./assets/backSpace.svg";
    backSpace.alt = "backspace";
    backSpace.style.width = "35px";
    keyPadStyle.width = "80px";
    keyPad[i + setNum].appendChild(backSpace);
  } else {
    keyPad[i + setNum].innerText = keyCharactor[2][i - 1];
    keyPad[i + setNum].dataset.key = keyCharactor[2][i - 1];
    keyPadStyle.width = "50px";
    keyPadStyle.fontSize = "30px";
    keyPadStyle.fontWeight = "bold";
  }

  keyBoard[2].appendChild(keyPad[i + setNum]);
}
