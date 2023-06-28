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
      boardBlockStyle.width = "60px";
      boardBlockStyle.height = "60px";
    });

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(boardRow);
  }
}

customElements.define("bord-row", BoardRow);

let boardRow = [];
const main = document.createElement("main");
main.style.marginTop = "20px";

body.appendChild(main);

for (let i = 0; i < 6; i++) {
  boardRow[i] = document.createElement("bord-row");
  main.appendChild(boardRow[i]);
}
