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
*/

// HTML Tag
const root = document.querySelector("#root");
const header = document.createElement("header");

const menuBar = document.createElement("div");

const menuBar_navIcon = document.createElement("div");
const menuBar_title = document.createElement("div");
const menuBar_icons = document.createElement("div");

const title = document.createElement("h1");
const navIcon = document.createElement("img");
const questionMark = document.createElement("img");
const chartBar = document.createElement("img");
const settingIcon = document.createElement("img");

const titleText = "Wordle";

// Selector
menuBar.setAttribute("class", "menu-bar");
menuBar_navIcon.setAttribute("class", "menu-bar__navIcon");
menuBar_title.setAttribute("class", "menu-bar__title");
menuBar_icons.setAttribute("class", "menu-bar__icons");

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

menuBarNavIconStyle = menuBar_navIcon.style;
menuBarNavIconStyle.display = "flex";
menuBarNavIconStyle.justifyContent = "center";
menuBarNavIconStyle.alignItems = "center";
menuBarNavIconStyle.marginRight = "15px";

menuBarTitle = menuBar_title.style;

menuBarIconsStyle = menuBar_icons.style;
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
menuBar.appendChild(menuBar_navIcon);
menuBar.appendChild(menuBar_title);
menuBar.appendChild(menuBar_icons);
menuBar_navIcon.appendChild(navIcon);
menuBar_title.appendChild(title);
menuBar_icons.appendChild(questionMark);
menuBar_icons.appendChild(chartBar);
menuBar_icons.appendChild(settingIcon);
