const footer = document.createElement("footer");
const keyBoard1st = document.createElement("div");
const keyBoard2nd = document.createElement("div");
const keyBoard3th = document.createElement("div");

const footerStyle = footer.style;
const keyBoard1stStyle = keyBoard1st.style;
const keyBoard2ndStyle = keyBoard2nd.style;
const keyBoard3thStyle = keyBoard3th.style;

let keyPad = [];
let keyCharactor = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

for (let i = 0; i < keyCharactor[0].length; i++) {
  keyPad[i] = document.createElement("div");
  keyPad[i].innerText = keyCharactor[0][i];

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

  keyBoard1st.appendChild(keyPad[i]);
}

for (let i = 0; i < keyCharactor[1].length; i++) {
  const setNum = keyCharactor[0].length;

  keyPad[i + setNum] = document.createElement("div");
  keyPad[i + setNum].innerText = keyCharactor[1][i];

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

  keyBoard2nd.appendChild(keyPad[i + setNum]);
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
  if (i === 0) {
    keyPad[i + setNum].innerText = "ENTER";
    keyPadStyle.width = "80px";
    keyPadStyle.fontSize = "18px";
    keyPadStyle.fontWeight = "bold";
  } else if (i === keyCharactor[2].length + 1) {
    const backSpace = document.createElement("img");
    backSpace.src = "./assets/backSpace.svg";
    backSpace.alt = "backspace";
    backSpace.style.width = "30px";
    keyPadStyle.width = "80px";
    keyPad[i + setNum].appendChild(backSpace);
  } else {
    keyPadStyle.width = "50px";
    keyPad[i + setNum].innerText = keyCharactor[2][i - 1];
    keyPadStyle.fontSize = "30px";
    keyPadStyle.fontWeight = "bold";
  }

  keyBoard3th.appendChild(keyPad[i + setNum]);
}

footerStyle.marginTop = "30px";
footerStyle.marginBottom = "30px";
keyBoard1stStyle.display = "flex";
keyBoard1stStyle.gap = "10px";
keyBoard1stStyle.marginTop = "15px";
keyBoard1stStyle.justifyContent = "center";
keyBoard1stStyle.alignItems = "center";
keyBoard2ndStyle.display = "flex";
keyBoard2ndStyle.gap = "10px";
keyBoard2ndStyle.marginTop = "15px";
keyBoard2ndStyle.justifyContent = "center";
keyBoard2ndStyle.alignItems = "center";
keyBoard3thStyle.display = "flex";
keyBoard3thStyle.gap = "10px";
keyBoard3thStyle.marginTop = "15px";
keyBoard3thStyle.justifyContent = "center";
keyBoard3thStyle.alignItems = "center";

body.appendChild(footer);
footer.appendChild(keyBoard1st);
footer.appendChild(keyBoard2nd);
footer.appendChild(keyBoard3th);
