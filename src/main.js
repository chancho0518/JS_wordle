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
      boardBlock[i].setAttribute("class", "board-block");
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
      boardBlockStyle.border = "2px solid #D3D6DA";
      boardBlockStyle.width = "70px";
      boardBlockStyle.height = "70px";
      boardBlockStyle.fontSize = "35px";
      boardBlockStyle.fontWeight = "bold";
    });

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(boardRow);
  }
}

customElements.define("board-row", BoardRow);

let boardRow = [];
const main = document.createElement("main");
const timer = document.createElement("div");
timer.setAttribute("id", "timer");
timer.innerText = "15";

main.style.marginTop = "20px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";
timer.style.fontSize = "40px";
timer.style.fontWeight = "bold";
timer.style.marginBTop = "20px";
timer.style.marginBottom = "20px";

body.appendChild(main);
main.appendChild(timer);

for (let i = 0; i < 6; i++) {
  boardRow[i] = document.createElement("board-row");
  boardRow[i].dataset.id = i;
  main.appendChild(boardRow[i]);
}
