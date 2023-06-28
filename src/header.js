/*
Requirement:
1. 5글자 단어(존재하는 단어가 아니어도 됨)
2. 6번의 시도 가능
3. 존재하면 노란색, 위치도 맞으면 초록색으로 표시
4. 게임 종료 판단
5. 상단에 게임시간 표시(추가)
6. 키보드에도 동일하게 표시(선택)
7. 키보드 클릭으로 입력(선택)

To-do:
- JavaScript 파일 분리(import - export 정리)
- 화면 background-color 밝음 다크 테마 변경 가능
- reset CSS → JS로 변환 
- favicon 추가
*/

// HTML Tag
const root = document.querySelector("#root");
const header = document.createElement("header");

const menuBar = document.createElement("div");

const menuBarNavIcon = document.createElement("div");
const menuBarTitle = document.createElement("div");
const menuBarIcons = document.createElement("div");

const title = document.createElement("h1");
const navIcon = document.createElement("img");
const questionMark = document.createElement("img");
const chartBar = document.createElement("img");
const settingIcon = document.createElement("img");

const titleText = "Wordle";

// Selector
menuBar.setAttribute("class", "menu-bar");
menuBarNavIcon.setAttribute("class", "menu-bar__navIcon");
menuBarTitle.setAttribute("class", "menu-bar__title");
menuBarIcons.setAttribute("class", "menu-bar__icons");

// Contents
title.innerText = titleText;

navIcon.src = "./assets/navIcon.svg";
navIcon.alt = "navIcon";
questionMark.src = "./assets/questionMark.svg";
questionMark.alt = "questionMark";
chartBar.src = "./assets/chartBar.svg";
chartBar.alt = "chartBar";
settingIcon.src = "./assets/settingIcon.svg";
settingIcon.alt = "settingIcon";

// CSS
headerStyle = header.style;
headerStyle.position = "fixed";
headerStyle.top = "0";
headerStyle.width = "100vw";
headerStyle.borderBottom = "2px solid rgb(215, 215, 215)";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.backgroundColor = "rgb(248, 248, 248)";

menuBarStyle = menuBar.style;
menuBarStyle.display = "flex";
menuBarStyle.justifyContent = "space-between";
menuBarStyle.alignItems = "center";
menuBarStyle.marginTop = "10px";

menuBarNavIconStyle = menuBarNavIcon.style;
menuBarNavIconStyle.display = "flex";
menuBarNavIconStyle.justifyContent = "center";
menuBarNavIconStyle.alignItems = "center";
menuBarNavIconStyle.marginRight = "15px";

menuBarTitleStyle = menuBarTitle.style;

menuBarIconsStyle = menuBarIcons.style;
menuBarIconsStyle.display = "flex";
menuBarIconsStyle.justifyContent = "center";
menuBarIconsStyle.alignItems = "center";
menuBarIconsStyle.marginRight = "15px";

titleStyle = title.style;
titleStyle.fontSize = "35px";
titleStyle.marginTop = "3px";
titleStyle.marginBottom = "3px";
navIconStyle = navIcon.style;
navIconStyle.width = "45px";
questionMarkStyle = questionMark.style;
questionMarkStyle.width = "40px";
chartBarStyle = chartBar.style;
chartBarStyle.width = "40px";
settingIconStyle = settingIcon.style;
settingIconStyle.width = "40px";

// HTML
root.appendChild(header);
header.appendChild(menuBar);
menuBar.appendChild(menuBarNavIcon);
menuBar.appendChild(menuBarTitle);
menuBar.appendChild(menuBarIcons);
menuBarNavIcon.appendChild(navIcon);
menuBarTitle.appendChild(title);
menuBarIcons.appendChild(questionMark);
menuBarIcons.appendChild(chartBar);
menuBarIcons.appendChild(settingIcon);

class BoardRow extends HTMLElement {
  connectedCallback() {
    this.start();
  }

  start() {
    const boardRow = document.createElement("div");
    const boardBlock0 = document.createElement("div");
    const boardBlock1 = document.createElement("div");
    const boardBlock2 = document.createElement("div");
    const boardBlock3 = document.createElement("div");
    const boardBlock4 = document.createElement("div");

    boardRow.setAttribute("class", "board-row");
    boardBlock0.setAttribute("class", "board-block");
    boardBlock1.setAttribute("class", "board-block");
    boardBlock2.setAttribute("class", "board-block");
    boardBlock3.setAttribute("class", "board-block");
    boardBlock4.setAttribute("class", "board-block");

    boardRow.appendChild(boardBlock0);
    boardRow.appendChild(boardBlock1);
    boardRow.appendChild(boardBlock2);
    boardRow.appendChild(boardBlock3);
    boardRow.appendChild(boardBlock4);

    this.appendChild(boardRow);
  }
}

customElements.define("bord-row", BoardRow);

const main = document.createElement("main");
const borrdRow0 = document.createElement("bord-row");
const borrdRow1 = document.createElement("bord-row");
const borrdRow2 = document.createElement("bord-row");
const borrdRow3 = document.createElement("bord-row");
const borrdRow4 = document.createElement("bord-row");
const borrdRow5 = document.createElement("bord-row");

root.appendChild(main);
main.appendChild(borrdRow0);
main.appendChild(borrdRow1);
main.appendChild(borrdRow2);
main.appendChild(borrdRow3);
main.appendChild(borrdRow4);
main.appendChild(borrdRow5);
