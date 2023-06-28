class BoardRow extends HTMLElement {
  connectedCallback() {
    this.start();
  }

  start() {
    let boardBlock = [];
    const boardRow = document.createElement("div");
    const boardRowStyle = boardRow.style;

    for (let i = 0; i < 5; i++) {
      boardBlock[i] = document.createElement("div");
      boardBlock[i].dataset.id = i;
      boardRow.appendChild(boardBlock[i]);
    }

    boardRowStyle.display = "flex";
    boardRowStyle.justifyContent = "center";
    boardRowStyle.alignItems = "center";
    boardRowStyle.gap = "10px";
    boardRowStyle.marginBottom = "10px";

    boardBlock.forEach((boardBlock) => {
      const boardBlockStyle = boardBlock.style;

      boardBlockStyle.display = "flex";
      boardBlockStyle.justifyContent = "center";
      boardBlockStyle.alignItems = "center";
      boardBlockStyle.border = "3px solid #d3d6da";
      boardBlockStyle.width = "70px";
      boardBlockStyle.height = "70px";
    });

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(boardRow);
  }
}

customElements.define("bord-row", BoardRow);

let boardRow = [];
const main = document.createElement("main");
const time = document.createElement("div");

time.innerText = "00:00";

main.style.marginTop = "20px";
time.style.display = "flex";
time.style.justifyContent = "center";
time.style.alignItems = "center";
time.style.fontSize = "40px";
time.style.fontWeight = "bold";
time.style.marginBTop = "20px";
time.style.marginBottom = "20px";

body.appendChild(main);
main.appendChild(time);

for (let i = 0; i < 6; i++) {
  boardRow[i] = document.createElement("bord-row");
  main.appendChild(boardRow[i]);
}
