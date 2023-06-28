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
const headerStyle = header.style;
const menuBarStyle = menuBar.style;
const menuBarNavIconStyle = menuBarNavIcon.style;
const menuBarTitleStyle = menuBarTitle.style;
const titleStyle = title.style;
const navIconStyle = navIcon.style;
const menuBarIconsStyle = menuBarIcons.style;
const questionMarkStyle = questionMark.style;
const chartBarStyle = chartBar.style;
const settingIconStyle = settingIcon.style;
const titleText = "Wordle";

// Contents
title.innerText = titleText;

// Icon Image
navIcon.src = "./assets/navIcon.svg";
navIcon.alt = "navIcon";
questionMark.src = "./assets/questionMark.svg";
questionMark.alt = "questionMark";
chartBar.src = "./assets/chartBar.svg";
chartBar.alt = "chartBar";
settingIcon.src = "./assets/settingIcon.svg";
settingIcon.alt = "settingIcon";

// CSS
headerStyle.display = "flex";
headerStyle.justifyContent = "space-between";
headerStyle.alignItems = "center";
headerStyle.width = "100vw";
headerStyle.borderBottom = "2px solid rgb(215, 215, 215)";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.backgroundColor = "rgb(248, 248, 248)";

menuBarStyle.display = "flex";
menuBarStyle.justifyContent = "space-between";
menuBarStyle.alignItems = "center";
menuBarStyle.width = "100vw";
menuBarStyle.marginLeft = "30px";
menuBarStyle.marginRight = "30px";

menuBarNavIconStyle.display = "flex";
menuBarNavIconStyle.justifyContent = "center";
menuBarNavIconStyle.alignItems = "center";

menuBarIconsStyle.display = "flex";
menuBarIconsStyle.justifyContent = "center";
menuBarIconsStyle.alignItems = "center";
menuBarIconsStyle.gap = "13px";

titleStyle.fontSize = "35px";
titleStyle.marginTop = "3px";
titleStyle.marginBottom = "3px";
titleStyle.justifyContent = "center";
titleStyle.alignItems = "center";

navIconStyle.width = "45px";
navIconStyle.justifyContent = "center";
navIconStyle.alignItems = "center";

questionMarkStyle.width = "40px";
questionMarkStyle.justifyContent = "center";
questionMarkStyle.alignItems = "center";

chartBarStyle.width = "40px";
chartBarStyle.justifyContent = "center";
chartBarStyle.alignItems = "center";

settingIconStyle.width = "40px";
settingIconStyle.justifyContent = "center";
settingIconStyle.alignItems = "center";

// HTML
body.appendChild(header);
header.appendChild(menuBar);
menuBar.appendChild(menuBarNavIcon);
menuBar.appendChild(menuBarTitle);
menuBar.appendChild(menuBarIcons);
menuBarNavIcon.appendChild(navIcon);
menuBarTitle.appendChild(title);
menuBarIcons.appendChild(questionMark);
menuBarIcons.appendChild(chartBar);
menuBarIcons.appendChild(settingIcon);
